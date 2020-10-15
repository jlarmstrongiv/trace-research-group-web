// @ts-check
const path = require('path');
const exportPathMap = require('./exportPathMap');
// postcss
// https://gist.github.com/drenther/a3ab45461a772d7fe577ab05be2fc652
// https://dev.to/notrab/get-up-and-running-with-tailwind-css-and-next-js-3a73
// https://github.com/postcss/autoprefixer#browsers
// const withSass = require('@zeit/next-sass');

console.log(process.env.NODE_ENV);

let productionConfig = {};
if (process.env.NODE_ENV === 'production') {
  productionConfig = {
    ...productionConfig,
    // assetPrefix: 'https://computing.clemson.edu/trace',
    assetPrefix: '/trace',
    experimental: {
      // https://computing.clemson.edu/trace/
      basePath: '/trace',
    },

    // No effect on public path
    // https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
    // https://nextjs.org/docs/api-reference/next.config.js/environment-variables
    env: {
      publicPath: 'https://computing.clemson.edu/trace',
    },
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
  };
}

const config = {
  env: {
    publicPath: '',
  },

  ...productionConfig,

  exportTrailingSlash: true,
  exportPathMap,
  reactStrictMode: true,

  webpack: (config, options) => {
    // .babelrc
    // https://spectrum.chat/next-js/general/add-node-path-src-to-nextjs~5fa6f531-d24f-4953-aa08-5f07ab0dfec9?m=MTU1NzcyNDA2MTQyMA==
    // https://github.com/zeit/next.js/issues/946#issuecomment-302944617
    // Webpack
    // https://www.reddit.com/r/reactjs/comments/a9s9yz/is_there_a_way_to_import_your_own/ecm0cmn/
    // jsconfig.json
    // https://stackoverflow.com/a/39414291
    // https://create-react-app.dev/docs/importing-a-component/#absolute-imports
    // Next.js
    // https://github.com/zeit/next.js/pull/2909
    config.resolve.alias = {
      ...config.resolve.alias,
      public: path.resolve(__dirname, 'public/'),
      static: path.resolve(__dirname, 'public/static/'),
    };

    return config;
  },
};

module.exports = {
  ...config,
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    // localIdentName: '[local]___[hash:base64:5]',
    localIdentName: '[name]__[local]___[hash:base64:5]',
  },
};
