import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuizQuestion = ({ quizQuestion, index, handleCorrectAnswer }) => {
  const { question, options, correctAnswer } = quizQuestion;
  const handleAnswerChecker = (option) => {
    if (option === correctAnswer) {
      toast("Your answer is correct.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast("Your answer is wrong.", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="card w-11/12 bg-gray-200 shadow-xl my-12 lg:w-1/2">
      <div className="flex justify-between pr-6 pl-10 my-10">
        <h2 className="card-title mr-8">
          Quiz {index + 1}: {question}
        </h2>
        <button onClick={() => handleCorrectAnswer(correctAnswer)}>
          <FontAwesomeIcon
            className="mt-2 text-2xl"
            icon={faEye}
          ></FontAwesomeIcon>
        </button>
      </div>
      <div className="flex flex-col items-center bg-gray-800">
        {options.map((option) => (
          <div className="form-control w-5/6 bg-gray-200 my-2 px-4 py-2 rounded-lg lg:w-4/6">
            <label className="label cursor-pointer flex justify-start">
              <input
                onClick={() => handleAnswerChecker(option)}
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-700 mr-5"
              />
              <span className="text-normal">{option}</span>
            </label>
          </div>
        ))}
        <ToastContainer
          position="bottom-center"
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
      </div>
    </div>
  );
};

export default QuizQuestion;
