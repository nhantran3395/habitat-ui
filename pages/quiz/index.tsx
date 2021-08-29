import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getAllQuestions,
  selectAllQuestions,
} from "../../features/quiz/quizSlice";
import { Pane, majorScale } from "evergreen-ui";
import Head from "../../components/common/Head";
import Layout from "../../components/common/Layout";
import Spinner from "../../components/common/Spinner";
import Option from "../../components/quiz/Option";
import QuestionIndicator from "../../components/quiz/QuestionIndicator";
import ArrowButton from "../../components/quiz/ArrowButton";
import styles from "../../styles/Quiz.module.scss";

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
              <h2 className={`${styles.question}`}>
                {currentQuestionIndex + 1}.{" "}
                {questions[currentQuestionIndex].questions.questionText}
              </h2>

              <div className={`flex-column-container ${styles.options} w-60`}>
                {questions[currentQuestionIndex].listOptions.map((option) => (
                  <Option
                    marginY={majorScale(2)}
                    onClick={handleSelectOption}
                    key={option.content}
                    className={styles.option}
                  >
                    {option.content}
                  </Option>
                ))}
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

              {isQuizFinished ? <ArrowButton /> : null}
            </>
          ) : null}
        </div>
      </Layout>
    </>
  );
};

export default Quiz;
