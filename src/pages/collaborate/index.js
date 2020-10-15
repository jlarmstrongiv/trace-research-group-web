import React from 'react';
import Layout from 'components/Layout/Layout';
import Splash from 'components/Splash/Splash';
import CollaborateComponent from 'components/Collaborate/Collaborate';
import Head from 'next/head';


const Collaborate = () => {
  return (
    <React.Fragment>
    <Head>
        <title>Collaborate</title>
        <meta
          name="description"
          content="Reach out to TRACE Reasearch Group for more information to questions"
        />
    </Head>
      <Layout
        splash={
          <Splash
            heading="Contact"
            summary="Collaborate with the TRACE Research Group"
            description="TRACE research group is a team of undergraduate and graduate students dedicated to research. We welcome industry collaborations and students to join and work with us."
            maxWidth={675}
          >
            <CollaborateComponent />
          </Splash>
        }
      ></Layout>
    </React.Fragment>

  );
};

export default Collaborate;
