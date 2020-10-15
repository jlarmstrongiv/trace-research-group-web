import React from 'react';
import Layout from 'components/Layout/Layout';
import Splash from 'components/Splash/Splash';
import { people } from 'data';
import PeopleComponent from 'components/People/People';
import Head from 'next/head';

const People = ({ people }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Team | TRACE Research Group</title>
        <meta
          name="description"
          content="The members of TRACE research group"
        />
      </Head>
      <Layout
        splash={
          <Splash
            heading="Our Team"
            summary="Graduate and Undergraduate Students"
            description="Currently, TRACE Research Group is a team of approximately 20 (+) graduate and undergraduate students, and over 30 faculty collaborators. Our members’ backgrounds include computer science, psychology, and cognitive science."
            maxWidth={675}
          >
            <PeopleComponent people={people} />
          </Splash>
        }
      ></Layout>
    </React.Fragment>
  );
};

People.getInitialProps = () => {
  return { people };
};

export default People;
