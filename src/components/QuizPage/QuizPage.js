import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const QuizPage = () => {
  const dataLoader = useLoaderData();
  const quiz = dataLoader.data;
  const { name, total, questions } = quiz;
  return (
    <div className="mt-16">
      <h1 className="text-center text-3xl font-medium">Quiz on {name}</h1>
      <div>
        {questions.map((quizQuestion) => (
          <QuizQuestion
            key={quizQuestion.id}
            quizQuestion={quizQuestion}
          ></QuizQuestion>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
