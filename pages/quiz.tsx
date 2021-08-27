import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getAllQuestions,
  selectAllQuestions,
} from "../features/quiz/quizSlice";
import { Pane } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";
import Button from "../components/common/Button";

const Quiz: NextPage = () => {
  const dispatch = useAppDispatch();
  const { questions, isPending, isError } = useAppSelector(selectAllQuestions);

  return (
    <>
      <Head pageName="Quiz" description="" />
      <Layout>
        <Button onClick={() => dispatch(getAllQuestions())}>
          Get questions
        </Button>
        {console.log(questions)}
      </Layout>
    </>
  );
};

export default Quiz;
