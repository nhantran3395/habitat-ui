import type { NextPage } from "next";
import { Pane } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const OurMission: NextPage = () => {
  return (
    <>
      <Head pageName="our mission" description="" />
      <Layout>
        <Pane>Our Mission</Pane>
      </Layout>
    </>
  );
};

export default OurMission;
