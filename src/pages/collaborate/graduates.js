import React from 'react';
import Layout from 'components/Layout/Layout';
import Splash from 'components/Splash/Splash';
import ContactContent from 'components/ContactContent/ContactContent';
import DoubleButtonDropdown from 'components/DoubleButtonDropdown/DoubleButtonDropdown';
import Head from 'next/head';

const Graduates = () => {
  return (
    <React.Fragment>
      <Head>
        <title>
          Graduate Students | TRACE Research Group
        </title>
        <meta
          name="description"
          content="Web page for Clemson's grad students to reach out to TRACE research group"
        />
      </Head>
      <Layout
        splash={
          <Splash
            heading="Graduate Students"
            summary="Join the TRACE Research Group"
            description="We welcome students with insights into human centered computing problems. We believe in a multidisciplinary approach to
                      issues that are faced in the contemporary technology landscape."
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
                  <li>3.5 GPA</li>
                  <li>Original Research proposals</li>
                  <li>Faculty Recommendations</li>
                  <li>
                    High degree of competency proven in the
                    field you seek to research
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
                  <li>Linked In</li>
                  <li>Resume</li>
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
                <DoubleButtonDropdown position="Graduate Student" />
              </section>
            </ContactContent>
          </Splash>
        }
      ></Layout>
    </React.Fragment>
  );
};

export default Graduates;
