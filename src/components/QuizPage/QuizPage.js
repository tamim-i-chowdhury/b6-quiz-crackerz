import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import QuizQuestion from "../QuizQuestion/QuizQuestion";

const QuizPage = () => {
  const dataLoader = useLoaderData();
  const quiz = dataLoader.data;
  const { name, total, questions } = quiz;
  const [correctAnswer, setCorrectAnswer] = useState("");
  const handleCorrectAnswer = (ca) => {
    setCorrectAnswer(ca);
    toast(ca, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <div className="mt-16">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
