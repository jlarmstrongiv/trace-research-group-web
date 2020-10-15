export { people } from './people';
export { news } from './news';
export { collaborations } from './Collaborations';
export { sponsorships } from './sponsorships/sponsorships';
export {themes} from './themes/themes'
import publicationsData from './publications/index.json';
export const publications = publicationsData;

export const examplePublication = {
  citationFormats: {
    mla: '',
    apa: '',
    chicago: '',
    harvard: '',
    vancouver: '',
  },
  bibtex: {
    author: [
      {
        family: '',
        given: '',
      },
    ],
    'collection-number': '',
    'container-title': '',
    id: '',
    issued: {
      'date-parts': [[2019]],
    },
    page: '',
    publisher: '',
    title: '',
    type: '',
    volume: '',
  },
};
