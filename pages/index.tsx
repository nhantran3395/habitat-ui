import type { NextPage } from "next";
import Image from "next/image";
import { Pane, Heading, Paragraph, majorScale } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head pageName="Home" description="" />
      <Layout>
        <Pane
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <Pane margin={majorScale(5)}>
            <Image src="/images/earth.svg" width={500} height={500} />
          </Pane>
          <Pane width={500}>
            <Heading size={900} margin={majorScale(5)}>
              "The greatest threat to our habitat is the belief that someone
              else will save it."
            </Heading>

            <Paragraph size={500} margin={majorScale(5)}>
              Curious to know how sustainable your lifestyle is? Take this quiz
              to discover your sustainability profile & ways you can make a
              difference!
            </Paragraph>
          </Pane>
        </Pane>
      </Layout>
    </>
  );
};

export default Home;
