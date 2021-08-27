import type { NextPage } from "next";
import { Pane } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const Resources: NextPage = () => {
  return (
    <>
      <Head pageName="Resources" description="" />
      <Layout>
        <Pane>Resources</Pane>
      </Layout>
    </>
  );
};

export default Resources;
