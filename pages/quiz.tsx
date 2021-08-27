import type { NextPage } from "next";
import { Pane } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";

const Quiz: NextPage = () => {
  return (
    <>
      <Head pageName="Quiz" description="" />
      <Layout>
        <Pane>Quiz</Pane>
      </Layout>
    </>
  );
};

export default Quiz;
