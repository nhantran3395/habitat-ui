import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getAllQuestions,
  selectAllQuestions,
} from "../../features/quiz/quizSlice";
import { Pane, Heading, majorScale } from "evergreen-ui";
import Head from "../../components/common/Head";
import Layout from "../../components/common/Layout";
import Spinner from "../../components/common/Spinner";
import Option from "../../components/quiz/Option";
import QuestionIndicator from "../../components/quiz/QuestionIndicator";
import ArrowButton from "../../components/quiz/ArrowButton";

const Quiz: NextPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizFinished, SetIsQuizFinished] = useState(false);

  const dispatch = useAppDispatch();
  const { questions, isPending, isError } = useAppSelector(selectAllQuestions);

  useEffect(() => {
    dispatch(getAllQuestions());
  }, []);

  const handleSelectOption = () => {
    goToNextQuestion();
    finishQuizWhenDoneAllQuestions();
  };

  const goToNextQuestion = () => {
    if (isHasNextQuestion(currentQuestionIndex)) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const isHasNextQuestion = (currentQuestionIdx: number) => {
    return currentQuestionIdx < questions.length - 1;
  };

  const finishQuizWhenDoneAllQuestions = () => {
    if (isOutOfQuestion(currentQuestionIndex)) {
      SetIsQuizFinished(true);
    }
  };

  const isOutOfQuestion = (currentQuestionIdx: number) => {
    return currentQuestionIdx === questions.length - 1;
  };

  return (
    <>
      <Head pageName="quiz" description="" />
      <Layout>
        <div className="flex-column-container">
          {isPending ? (
            <div className="m-5">
              <Spinner />
            </div>
          ) : null}
          {!isPending && questions.length !== 0 ? (
            <>
              <div className="flex-column-container w-60">
                <h1>
                  {questions[currentQuestionIndex].questions.questionText}
                </h1>

                <div className="flex-column-container">
                  {questions[currentQuestionIndex].listOptions.map((option) => (
                    <Option
                      margin={majorScale(2)}
                      onClick={handleSelectOption}
                      key={option.content}
                    >
                      {option.content}
                    </Option>
                  ))}
                </div>

                {isQuizFinished ? <ArrowButton /> : null}
              </div>

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
        </div>
      </Layout>
    </>
  );
};

export default Quiz;
