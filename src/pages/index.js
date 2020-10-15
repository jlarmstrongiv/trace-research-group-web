import Head from 'next/head';
import {
  people,
  news,
  collaborations,
  sponsorships,
} from 'data';
import Layout from 'components/Layout/Layout';
import Splash from 'components/Splash/Splash';
import DoubleButton from 'components/DoubleButton/DoubleButton';
import News from 'components/News/News';
import ImageGrid from 'components/ImageGrid/ImageGrid';
import slug from 'slug';
import Quote from 'components/Quote/Quote';
import Section from 'components/Section/Section';
import Info from 'components/Info/Info';
import GetInTouch from 'components/GetInTouch/GetInTouch';
import Associations from 'components/Associations/Associations';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './index.module.scss';
import Logo from 'components/Logo/Logo';
// import "animate.css/animate.min.css";

const Home = ({
  people,
  news,
  collaborations,
  sponsorships,
}) => (
  <React.Fragment>
    <Head>
      <title>Home | TRACE Research Group</title>
      <meta
        name="description"
        content="Web page for Clemson's TRACE research group on human centered computing"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
      ></link>
    </Head>
    <style>
      {`
          .SplashHack {
            background-image: url(/static/images/pattern.svg);
          }
        `}
    </style>
    <Layout
      splash={
        <div className={styles.porthole}>
          {/* <div
            className={`${styles.squares} SplashHack`}
          ></div> */}
          <video
            className={styles.video}
            poster={`/static/videos/drones.jpg`}
            playsInline
            autoPlay
            muted
            loop
          >
            <source
              src={`/static/videos/drones.mp4`}
              type="video/mp4"
            ></source>
          </video>
          <Logo />
        </div>
      }
    >
      <Splash
        heading="TRACE Research Group"
        summary="Team Research Analytics in Computational Environments"
        description="The TRACE research group was founded in 2017 at the Clemson University School of Computing by Dr. Nathan McNeese. The group conducts research on Human-Artificial Intelligence (AI) Teaming, Human-Centered AI, and Collaborative Technologies."
        doubleButton={
          <DoubleButton
            primary="Contact"
            primaryLink="/collaborate/"
            secondary="Publications"
            secondaryLink="/publications/"
          />
        }
      >
        <News news={news} />
      </Splash>
      <Section.Grid>
        <ScrollAnimation
          animateIn="slideInRight"
          animateOut="slideOutLeft"
        >
          <Section
            title="Meet the Team"
            text="We are comprised of a multi-disciplinary team. Their research is centered on investigations into teaming environments for various agents."
          >
            <ImageGrid
              images={people.map((person) => ({
                alt: `Go to ${person.name}’s spotlight`,
                image: `static/people/optimized/square/${slug(
                  person.name,
                  { lower: true },
                )}.jpg`,
                href: '/people/[personSlug]',
                as: `/people/${slug(person.name, {
                  lower: true,
                })}/`,
              }))}
              // cta={
              //   <ImageGrid.CallToAction href="/collaborate/">
              //     +Join
              //   </ImageGrid.CallToAction>
              // }
            />
          </Section>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          animateOut="slideOutRight"
        >
          <Section.Reverse
            title="TRACE Camp"
            text="Since 2018 we have offered Winter and Summer bootcamps to teach some of the tech industry's top coding frameworks. As of now the courses offered include React, Django, and GraphQL.."
          >
            <Section.Image src="static/images/trace-camp.jpg" />
          </Section.Reverse>
        </ScrollAnimation>
        <Quote>
          <span>TRACE Research group</span> focuses on
          human-centered computing to enhance societies
          capabilties for{' '}
          <span>human and agent teaming</span>.
        </Quote>
        <ScrollAnimation
          animateIn="slideInRight"
          animateOut="slideOutLeft"
        >
          <Section
            title="Data Lab"
            text="In concert with Clemsons new Data Lab, TRACE Lab has been granted several high powered machines to train and test ML models. Our students will now be able to run complex models in house to advance research and understanding"
          >
            <Section.Image src="static/images/data-lab.jpg" />
          </Section>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="slideInLeft"
          animateOut="slideOutRight"
        >
          <Section.Reverse
            title="Open Source"
            text="We are comprised of a multi-disciplinary team. Their research is centered on investigations into teaming environments for various agents."
          >
            <Section.Image src="static/images/open-source.jpg" />
          </Section.Reverse>
        </ScrollAnimation>
        <Associations
          collaborations={collaborations}
          sponsorships={sponsorships}
        />
        <ScrollAnimation animateIn="slideInUp">
          <Info.Container>
            <Info
              icon="static/icons/gameday-sky-500/icons8-elective.svg"
              title="Research"
              text="TRACE lab publishes papers year round on relevant topics involving human-computer interactions, agent-agent teaming."
            />
            <Info
              icon="static/icons/gameday-sky-500/icons8-people.svg"
              title="Community"
              text="We give back to Clemson's students and the local community by offering free coding bootcamps in the summer and winter. "
            />
            <Info
              icon="static/icons/gameday-sky-500/icons8-mortarboard.svg"
              title="Learning"
              text="We are a team of faculty, graduate, and undergraduate students aiming to cultivate a cross-disciplinary, diverse learning environment."
            />
          </Info.Container>
        </ScrollAnimation>
        <GetInTouch />
      </Section.Grid>
    </Layout>
  </React.Fragment>
);

export default Home;

Home.getInitialProps = () => {
  // console.log(
  //   people.map(person =>
  //     slug(person.name, { lower: true }),
  //   ),
  // );

  return { people, news, collaborations, sponsorships };
};

// New docs with static
// blog announcement https://nextjs.org/blog/next-9-1-7#redesigned-production-build-cli-output
// github proposal https://github.com/zeit/next.js/issues/9524
// released? and how to https://github.com/zeit/next.js/issues/9524#issuecomment-573275859
// docs pull request https://github.com/zeit/next.js/pull/9301/files
// https://github.com/zeit/next.js/blob/canary/docs/concepts/_data-fetching.md
// https://github.com/zeit/next.js/blob/canary/docs/concepts/_server-side-and-client-side.md
// lazy loading modules https://nextjs.org/learn/excel/lazy-loading-modules/lazy-loading

// Apollo https://github.com/zeit/next.js/tree/canary/examples/with-apollo
