import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getAllQuestions,
  selectAllQuestions,
} from "../features/quiz/quizSlice";
import { Pane, Heading, majorScale } from "evergreen-ui";
import Head from "../components/common/Head";
import Layout from "../components/common/Layout";
import Spinner from "../components/common/Spinner";
import Option from "../components/quiz/Option";
import QuestionIndicator from "../components/quiz/QuestionIndicator";

const Quiz: NextPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const dispatch = useAppDispatch();
  const { questions, isPending, isError } = useAppSelector(selectAllQuestions);

  useEffect(() => {
    dispatch(getAllQuestions());
  }, []);

  const handleSelectOption = () => {
    goToNextQuestion();
  };

  const goToNextQuestion = () => {
    if (isHasNextQuestion(currentQuestionIndex)) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const isHasNextQuestion = (currentQuestionIdx: number) => {
    return currentQuestionIdx < questions.length - 1;
  };

  return (
    <>
      <Head pageName="Quiz" description="" />
      <Layout>
        <Pane
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          {isPending ? (
            <Pane margin={majorScale(5)}>
              <Spinner />
            </Pane>
          ) : null}
          {!isPending && questions.length !== 0 ? (
            <>
              <Pane
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height={500}
                marginBottom={majorScale(3)}
              >
                <Heading size={900} margin={majorScale(5)} width={800}>
                  {questions[currentQuestionIndex].questions.questionText}
                </Heading>
                <Pane
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  {questions[currentQuestionIndex].listOptions.map((option) => (
                    <Option
                      width={800}
                      margin={majorScale(2)}
                      onClick={handleSelectOption}
                      key={option.content}
                    >
                      {option.content}
                    </Option>
                  ))}
                </Pane>
              </Pane>

              <Pane
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                margin={majorScale(5)}
              >
                {questions.map((question, questionIdx) => (
                  <QuestionIndicator
                    key={question.questions.questionText}
                    isCurrent={questionIdx === currentQuestionIndex}
                    isPrevious={questionIdx < currentQuestionIndex}
                  />
                ))}
              </Pane>
            </>
          ) : null}
        </Pane>
      </Layout>
    </>
  );
};

export default Quiz;
