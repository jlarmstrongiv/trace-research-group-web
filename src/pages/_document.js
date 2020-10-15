/**
 * PWA Offline Support
 * https://dev.to/kylessg/achieving-a-perfect-100-google-lighthouse-audit-score-with-next-js-and-redux-5p0
 * https://www.npmjs.com/package/next-offline
 * https://github.com/pingboard/next-pwa-boilerplate
 * See _app.js
 */

/**
 * Favicons
 * https://realfavicongenerator.net/
 */

/**
 * Meta Tags
 * https://github.com/joshbuchea/HEAD
 */

import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          {/* https://www.keycdn.com/blog/google-pagespeed-insights-wordpress */}
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Sans+Extra+Condensed:700|Fira+Sans:400,700|Zilla+Slab:600i,700&display=swap"
            rel="stylesheet"
          />
        </body>
      </Html>
    );
  }
}
