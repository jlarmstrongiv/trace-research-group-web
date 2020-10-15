import React from 'react';
import Layout from 'components/Layout/Layout';
import Splash from 'components/Splash/Splash';
import ContactContent from 'components/ContactContent/ContactContent';
import DoubleButtonDropdown from 'components/DoubleButtonDropdown/DoubleButtonDropdown';
import Head from 'next/head';

const Undergraduates = () => {
  return (
    <React.Fragment>
      <Head>
        <title>
          Undergraduate Students | TRACE Research Group
        </title>
        <meta
          name="description"
          content="Web page for undergrads to reach out to Clemson's TRACE research group "
        />
      </Head>
      <Layout
        splash={
          <Splash
            heading="Undergraduate Students"
            summary="Collaborate with the TRACE Research Group members"
            description="Take part in our current research and explore questions you may have in regards to your future in acdemia. Don't be afraid to
                        submit your own research proposals as well"
            maxWidth={675}
          >
            <ContactContent>
              <section>
                <h3>Responsibilities</h3>
                <p>
                  TRACE Lab is driven by students who excel
                  their field. As such, please know we
                  expect the following standards to be met
                  by Student interested in joining.
                </p>
                <ul>
                  <li>3.0 GPA minimum</li>
                  <li>Faculty Recommendations</li>
                  <li>
                    TRACE Research Group member endorsemen
                  </li>
                  <li>
                    Ability to assist graduate students and
                    Phd candidates in their research without
                    interfering with your studies
                  </li>
                </ul>
              </section>
              <section>
                <h3>Application</h3>
                <p>
                  To see if you are right for the lab,
                  please send us email us the following
                  materials:
                </p>
                <ul>
                  <li>Resume</li>
                  <li>Personal Website</li>
                  <li>Linkedin</li>
                </ul>
              </section>
              <section>
                <h3>Submission</h3>
                <p>
                  Graduate students are involved in the
                  vetting of applications. Please submit
                  your application to the graduate student
                  in the relevant field. All applications
                  are sent to Dr. McNeese as well.
                </p>
                <br />
                <DoubleButtonDropdown position="Undergraduate Student" />
              </section>
            </ContactContent>
          </Splash>
        }
      ></Layout>
    </React.Fragment>
  );
};

export default Undergraduates;
