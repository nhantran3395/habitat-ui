import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { Pane, Heading, Paragraph, majorScale } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";
import Button from "../components/common/Button";

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
            <Image src="/images/earth.svg" width={600} height={600} />
          </Pane>
          <Pane width={500} margin={majorScale(5)}>
            <Heading size={900} marginY={majorScale(3)}>
              &quot;The greatest threat to our habitat is the belief that
              someone else will save it.&quot;
            </Heading>

            <Paragraph size={500} marginY={majorScale(3)}>
              Curious to know how sustainable your lifestyle is? Take this quiz
              to discover your sustainability profile &amp; ways you can make a
              difference!
            </Paragraph>

            <NextLink href="/quiz">
              <Button marginY={majorScale(2)}>Take the quiz</Button>
            </NextLink>
          </Pane>
        </Pane>
      </Layout>
    </>
  );
};

export default Home;
