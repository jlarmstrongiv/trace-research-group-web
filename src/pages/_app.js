import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import 'utilities/styling/reset.global.scss';

// https://github.com/zeit/next.js/issues/5214#issuecomment-575612685
import Router from 'next/router';

export default class MyApp extends App {
  render() {
    const {
      Component,
      pageProps,
      router: { asPath, route },
    } = this.props;

    // Next.js currently does not allow trailing slash in a route.
    // This is a client side redirect in case trailing slash occurs.
    if (
      pageProps.statusCode === 404 &&
      asPath.length > 1 &&
      asPath.endsWith('/')
    ) {
      const routeWithoutEndingSlash = route.replace(
        /\/*$/gim,
        '',
      );
      const asPathWithoutEndingSlash = asPath.replace(
        /\/*$/gim,
        '',
      );

      if (typeof window !== 'undefined') {
        Router.replace(
          routeWithoutEndingSlash,
          asPathWithoutEndingSlash,
        );
      }
      return null;
    }

    return (
      <React.Fragment>
        <Head>
          Default EMMET HTML
          {/* Avoid duplication of meta tags */}
          {/* https://nextjs.org/docs/api-reference/next/head */}
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
            key="viewport"
          />
          <meta
            httpEquiv="X-UA-Compatible"
            content="ie=edge"
            key="X-UA-Compatible"
          />
          {/* https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base */}
          {process.env.NODE_ENV === 'production' ? (
            <base href="https://computing.clemson.edu/trace/" />
          ) : (
            <base href="http://localhost:3000/" />
          )}
          {/*  */}
          {/* <title>TRACE Research Group</title> */}
          <meta
            name="title"
            content="TRACE Research Group"
          />
          <meta
            name="description"
            content="TRACE research group tackles emergent issues faced in the tech landscape. Boasting a team assembled of multi-disciplinary backgrounds, we strive to produce research that accounts for various human-machine interactions."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://computing.clemson.edu/trace/"
          />
          <meta
            property="og:title"
            content="TRACE Research Group"
          />
          <meta
            property="og:description"
            content="TRACE research group tackles emergent issues faced in the tech landscape. Boasting a team assembled of multi-disciplinary backgrounds, we strive to produce research that accounts for various human-machine interactions."
          />
          <meta
            property="og:image"
            content={`${process.env.publicPath}/static/metadata/metadata.jpg`}
          />
          <meta
            property="twitter:card"
            content="summary_large_image"
          />
          <meta
            property="twitter:url"
            content="https://computing.clemson.edu/trace/"
          />
          <meta
            property="twitter:title"
            content="TRACE Research Group"
          />
          <meta
            property="twitter:description"
            content="TRACE research group tackles emergent issues faced in the tech landscape. Boasting a team assembled of multi-disciplinary backgrounds, we strive to produce research that accounts for various human-machine interactions."
          />
          <meta
            property="twitter:image"
            content={`${process.env.publicPath}/static/metadata/metadata.jpg`}
          />
          {/* https://realfavicongenerator.net/ */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="static/favicon/favicon-16x16.png"
          />
          <link
            rel="manifest"
            href="static/favicon/site.webmanifest"
          />
          <link
            rel="mask-icon"
            href="static/favicon/safari-pinned-tab.svg"
            color="#f66733"
          />
          <link
            rel="shortcut icon"
            href="static/favicon/favicon.ico"
          />
          <meta
            name="msapplication-TileColor"
            content="#f66733"
          />
          <meta
            name="msapplication-config"
            content="static/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

// export default class MyApp extends App {
//   // Only uncomment this method if you have blocking data requirements for
//   // every single page in your application. This disables the ability to
//   // perform automatic static optimization, causing every page in your app to
//   // be server-side rendered.

//   // static async getInitialProps(appContext) {
//   //   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   //   const appProps = await App.getInitialProps(appContext);
//   //
//   //   return { ...appProps }
//   // }

//   // static async getInitialProps({ Component, ctx }) {
//   //   let pageProps;
//   //   // Ensure getInitialProps gets called on our child pages
//   //   if (Component.getInitialProps) {
//   //     pageProps = await Component.getInitialProps({ ctx });
//   //   }

//   //   return { pageProps };
//   // }

//   render() {
//     const { Component, pageProps, router } = this.props;
//     return <Component {...pageProps} router={router} />;
//   }
// }
