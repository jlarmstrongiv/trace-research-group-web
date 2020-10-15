import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import slug from 'slug';
import { themes } from 'data';
import DesktopPerson from 'components/DesktopPerson/DesktopPerson';
import MobilePerson from 'components/MobilePerson/MobilePerson';
import Theme from 'components/Theme/Theme'

const Abstract = ({ theme, nameSlug }) => {
  if (!theme) return 'No Theme here';

  const original = (
    <React.Fragment>
      {themes.theme}
      <br />
      <Link href="/themes">
        <a>Themes</a>
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      <Head>
        <title>Team | TRACE Research Group</title>
        <meta
          name="description"
          content={`${themes.theme} is an ${themes.theme} in the TRACE Research Group.`}
        />
      </Head>
      {/* {/* <MobilePerson person={person} nameSlug={nameSlug} /> */}
      <Theme theme={theme}/>
    </div>
  );
};

// Abstract.getInitialProps = ({ query }) => {
//   const { themeSlug } = query;

//   const theme = themes.find(theme => {
//     return (
//       slug(theme.name, { lower: true }) === themeSlug
//     );
//   });

//   return { theme, nameSlug: themeSlug };
// };

export default Abstract;
