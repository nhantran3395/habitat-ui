import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import { Pane, Heading, Paragraph, majorScale } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";
import Button from "../components/common/Button";
import styles from "../components/common/Layout/Layout.module.scss";

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

        <Pane
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          margin={majorScale(5)}
          className={styles.bottomRightCorner}
        >
          <Image src="/images/facebook.svg" width={54} height={54} />
          <Image src="/images/twitter.svg" width={47} height={47} />
          <Image src="/images/instagram.svg" width={46} height={46} />
          <Image src="/images/whatsapp.svg" width={38} height={38} />
        </Pane>
      </Layout>
    </>
  );
};

export default Home;
