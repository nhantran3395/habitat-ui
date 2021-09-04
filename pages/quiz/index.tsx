import React, { useState, useEffect, MouseEvent } from "react";
import type { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  getAllQuestions,
  selectAllQuestions,
} from "../../features/quiz/quizSlice";
import {
  getProfileByUserId,
  selectUserProfile,
} from "../../features/userProfile/userProfileSlice";
import { ISelection } from "../../models/quiz";
import { Pane, majorScale } from "evergreen-ui";
import Head from "../../components/common/Head";
import Layout from "../../components/common/Layout";
import Spinner from "../../components/common/Spinner";
import Option from "../../components/quiz/Option";
import QuestionIndicator from "../../components/quiz/QuestionIndicator";
import FowardArrowButton from "../../components/quiz/FowardArrowButton";
import ResultLoadingIndicator from "../../components/quiz/ResultLoadingIndicator";
import styles from "../../styles/Quiz.module.scss";

const PROFILE_MAP = new Map();
PROFILE_MAP.set("Curious Explorer", "/quiz/results/curious-explorer");
PROFILE_MAP.set("Conscious Consumer", "/quiz/results/conscious-consumer");
PROFILE_MAP.set("Savvy Swapper", "/quiz/results/savvy-swapper");

const Quiz: NextPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  const [selections, setSelections] = useState<ISelection[]>([]);

  const dispatch = useAppDispatch();
  const { questions, isPending, isError } = useAppSelector(selectAllQuestions);
  const {
    profileName,
    isPending: isProfilePending,
    isError: isProfileError,
  } = useAppSelector(selectUserProfile);

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(getAllQuestions());
    }
  }, []);

  const handleSelectOption = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const optionId = target.dataset?.optionId ?? "";
    const questionId = target.dataset?.questionId ?? "";
    updateSelections(optionId, questionId);
    goToNextQuestion();
    finishQuizWhenDoneAllQuestions();
  };

  const updateSelections = (optionId: string, questionId: string) => {
    const currentSelection = { optionId, questionId };
    setSelections([...selections, currentSelection]);
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
      setIsQuizFinished(true);
      submitAnswerThenGetProfile();
    }
  };

  const isOutOfQuestion = (currentQuestionIdx: number) => {
    return currentQuestionIdx === questions.length - 1;
  };

  const submitAnswerThenGetProfile = async () => {
    const userId = await submitAnswers(selections);
    dispatch(getProfileByUserId(userId));
  };

  const submitAnswers = async (answers: ISelection[]) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_HABITAT_API}/answer/answerQuestions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(answers),
      }
    );

    const data = await response.json();
    const { userId } = data;
    return userId;
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
              <h2 className={`${styles.question} text-center`}>
                {currentQuestionIndex + 1}.{" "}
                {questions[currentQuestionIndex].questions.questionText}
              </h2>

              <div className={`flex-column-container ${styles.options} w-60`}>
                {questions[currentQuestionIndex].listOptions.map((option) => (
                  <Option
                    marginY={majorScale(2)}
                    onClick={handleSelectOption}
                    key={option.content}
                    data-option-id={option.optionId}
                    data-question-id={option.questionId}
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

              {isQuizFinished && (profileName === "" || isProfilePending) ? (
                <ResultLoadingIndicator />
              ) : null}

              {isQuizFinished && !isProfilePending && profileName.length > 0 ? (
                <FowardArrowButton goToPage={PROFILE_MAP.get(profileName)} />
              ) : null}
            </>
          ) : null}
        </div>
      </Layout>
    </>
  );
};

export default Quiz;
