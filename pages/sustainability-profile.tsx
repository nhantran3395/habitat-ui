import type { NextPage } from "next";
import { Pane } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const SustainabilityProfile: NextPage = () => {
  return (
    <>
      <Head pageName="Sustainability Profile" description="" />
      <Layout>
        <Pane>Sustainability Profile</Pane>
      </Layout>
    </>
  );
};

export default SustainabilityProfile;
