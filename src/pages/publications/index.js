import React from 'react';
import Layout from 'components/Layout/Layout';
import Splash from 'components/Splash/Splash';
import { publications } from 'data';
import PublicationsComponent from 'components/Publications/Publications';
import Head from 'next/head';

const Publications = ({ publications }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Publications | TRACE Research Group</title>
        <meta
          name="description"
          content="Web page for published reserach out of TRACE Lab"
        />
      </Head>
      <Layout
        splash={
          <Splash
            heading="Publications"
            summary="Journal Publications and Conference Papers"
            description="TRACE research group tackles emergent issues faced in the tech landscape. Boasting a team assembled of multi-disciplinary backgrounds, we strive to produce research that accounts for various human-machine interactions."
            maxWidth={675}
          >
            <PublicationsComponent
              publications={publications}
            />
          </Splash>
        }
      ></Layout>
    </React.Fragment>
  );
};

Publications.getInitialProps = () => {
  return { publications };
};

export default Publications;
