const fs = require('fs-extra');
const fg = require('fast-glob');
const path = require('path');
const slug = require('slug');

// https://stackoverflow.com/a/38595329
function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
}

// https://stackoverflow.com/a/34347138
function removeArticles(str) {
  words = str.split(' ');
  if (words.length <= 1) return str;
  if (
    words[0] == 'a' ||
    words[0] == 'the' ||
    words[0] == 'an'
  )
    return words.splice(1).join(' ');
  return str;
}

(async () => {
  const jsonFiles = await fg([
    './src/data/publications/*.json',
    '!**/index*',
  ]);

  const jsFiles = await fg([
    './src/data/publications/*.js',
    '!**/index.js',
    '!**/makePublications',
    '!**/index*',
  ]);

  let combinedData = [];
  for (const jsonFile of jsonFiles) {
    // json file
    let jsonData = await fs.readJSON(jsonFile);
    jsonData = jsonData.map(jsonDatum => ({
      ...jsonDatum,
      jsonFile,
    }));

    // associated js file
    const jsFile = jsFiles.find(
      jsFile =>
        path.basename(jsFile, '.js') ===
        path.basename(jsonFile, '.json'),
    );

    // clean js file
    let jsData = require(`./${path.basename(jsFile)}`);
    jsData = jsData.map(jsDatum => {
      return {
        ...jsDatum,
        researchGate: jsDatum.researchGate.split('?')[0],
        // https://stackoverflow.com/a/20056634
        // https://stackoverflow.com/a/40142592
        abstract: jsDatum.abstract
          .replace(/[\r\n]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim(),
        jsFile,
        pdfFileName: path.basename(jsDatum.pdfFile, '.pdf'),
      };
    });

    // match js and json data
    let data = jsonData.map(jsonDatum => {
      return {
        bibtext: jsonDatum,
        citationFormats: jsData.find(jsDatum => {
          const string = JSON.stringify(
            jsDatum,
          ).toLowerCase();
          const match = string.includes(
            jsonDatum.title.toLowerCase(),
          );
          return match;
        }),
      };
    });

    // remove any problem children
    data = data.filter(datum => {
      if (!datum.bibtext || !datum.citationFormats) {
        // console.log('MISSING DATA');
        return false;
      }
      if (!datum.citationFormats.pdfFile) {
        // console.log('MISSING PDF');
        return false;
      }
      return true;
    });

    // add images
    for (const datum of data) {
      const pdfFileName = path.basename(
        datum.citationFormats.pdfFile,
        '.pdf',
      );

      const imagePaths = await fg([
        `./public/static/publications/${pdfFileName}/*.jpg`,
      ]);

      const images = imagePaths.map(imagePath =>
        path.basename(imagePath),
      );

      datum.images = images;
    }

    // combine
    combinedData.push(data);
  }

  combinedData = combinedData.flat(1);

  // add personSlug array
  combinedData = combinedData.map((item, index, items) => {
    const possibleDuplicates = items.filter(
      existing =>
        existing.bibtext.title === item.bibtext.title,
    );
    item.personSlug = possibleDuplicates.map(
      possibleDuplicate =>
        path.basename(
          possibleDuplicate.citationFormats.jsFile,
          '.js',
        ),
    );
    if (possibleDuplicates.length > 1) {
      // console.log(
      //   possibleDuplicates.length,
      //   item.bibtext.title,
      // );
    }
    return item;
  });

  // add title to filter by
  combinedData = combinedData.map(item => ({
    ...item,
    title: item.bibtext.title,
  }));

  // remove duplicates
  // console.log(combinedData.length);
  combinedData = removeDuplicates(combinedData, 'title');
  // console.log(combinedData.length);

  // remove title that was filtered by
  combinedData = combinedData.map(item => {
    const { title, ...rest } = item;
    return rest;
  });

  // add slug
  combinedData = combinedData.map(item => {
    let title =
      item.bibtext['title-short'] || item.bibtext.title;

    const publicationSlug = slug(
      title
        .split(' ')
        .slice(0, 6)
        .join(' '),
      {
        lower: true,
      },
    );

    return { ...item, publicationSlug };
  });

  // sort alphabetically
  combinedData = combinedData.sort(
    (publicationA, publicationB) => {
      if (
        removeArticles(
          publicationA.bibtext.title.toLowerCase(),
        ) <
        removeArticles(
          publicationB.bibtext.title.toLowerCase(),
        )
      ) {
        return -1;
      }
      if (
        removeArticles(
          publicationA.bibtext.title.toLowerCase(),
        ) >
        removeArticles(
          publicationB.bibtext.title.toLowerCase(),
        )
      ) {
        return 1;
      }

      return 0;
    },
  );

  // console.log(
  //   combinedData.map(item => item.publicationSlug),
  // );

  // output json
  await fs.writeJson(
    './src/data/publications/index.json',
    combinedData,
    { spaces: 2 },
  );
})();
