import type { NextPage } from "next";
import Image from "next/image";
import NextLink from "next/link";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";
import Button from "../components/common/Button";
import SocialNetworkBar from "../components/common/SocialNetworkBar";

const Home: NextPage = () => {
  return (
    <>
      <Head pageName="home" description="" />
      <Layout>
        <div className="flex-row-container">
          <div className="w-50">
            <Image src="/images/earth.svg" width={600} height={600} />
          </div>
          <div className="w-50 m-3">
            <h1>
              &quot;The greatest threat to our habitat is the belief that
              someone else will save it.&quot;
            </h1>

            <p>
              Curious to know how sustainable your lifestyle is? Take this quiz
              to discover your sustainability profile &amp; ways you can make a
              difference!
            </p>

            <NextLink href="/quiz">
              <div className="my-3">
                <Button>Take the quiz</Button>
              </div>
            </NextLink>
          </div>
        </div>

        <SocialNetworkBar />
      </Layout>
    </>
  );
};

export default Home;
