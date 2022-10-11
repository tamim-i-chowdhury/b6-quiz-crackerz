import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const QuizPage = () => {
  const dataLoader = useLoaderData();
  const quiz = dataLoader.data;
  const { name, total, questions } = quiz;
  const [correctAnswer, setCorrectAnswer] = useState("");
  const handleCorrectAnswer = (ca) => {
    setCorrectAnswer(ca);
  };
  return (
    <div className="mt-16">
      <div className="toast toast-middle toast-end">
        <div className="alert alert-info">
          <div>
            <span>{correctAnswer}</span>
          </div>
        </div>
      </div>
      <h1 className="text-center text-4xl font-medium">Quiz on {name}</h1>
      <div className="flex flex-col items-center">
        {questions.map((quizQuestion, index) => (
          <QuizQuestion
            key={quizQuestion.id}
            quizQuestion={quizQuestion}
            index={index}
            handleCorrectAnswer={handleCorrectAnswer}
          ></QuizQuestion>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
