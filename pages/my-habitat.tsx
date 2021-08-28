import type { NextPage } from "next";
import { Pane } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const MyHabitat: NextPage = () => {
  return (
    <>
      <Head pageName="My Habitat" description="" />
      <Layout>
        <Pane>My Habitat</Pane>
      </Layout>
    </>
  );
};

export default MyHabitat;
