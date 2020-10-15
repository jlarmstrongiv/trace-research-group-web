import React from 'react';
import Layout from 'components/Layout/Layout';
import Splash from 'components/Splash/Splash';
import Head from 'next/head';
import ThemeComponent from 'components/Themes/Themes'
import { themes } from 'data';


const Theme = ({ themes }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Themes | TRACE Research Group</title>
        <meta
          name="description"
          content="Web page to tangible research out of TRACE Lab"
        />
      </Head>
      <Layout
        splash={
          <Splash
            heading="Themes"
            summary="Research Themes for TRACE Lab"
            description="Becuase of our multidisciplinary approach to research, the TRACE team tackles varying themes in the field of HCC and HCI. Here are some of the themes of our research thus far."
            maxWidth={675}
          >
          <ThemeComponent themes={themes}/>
          
          </Splash>
        }
      ></Layout>

    </React.Fragment>
  );
};


Theme.getInitialProps = () => {
  return {themes}
};

export default Theme;