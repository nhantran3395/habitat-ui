import type { NextPage } from "next";
import { Pane } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const Home: NextPage = () => {
  return (
    <>
      <Head pageName="Home" description="" />
      <Layout>
        <Pane>Home</Pane>
      </Layout>
    </>
  );
};

export default Home;
