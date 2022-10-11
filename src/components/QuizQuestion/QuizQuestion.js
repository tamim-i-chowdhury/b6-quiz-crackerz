import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

import React from "react";

const QuizQuestion = ({ quizQuestion, index, handleCorrectAnswer }) => {
  const { question, options, correctAnswer } = quizQuestion;
  return (
    <div className="card w-11/12 bg-white shadow-xl my-12 lg:w-1/2">
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
      <div className="flex flex-col items-center">
        {options.map((option) => (
          <div className="form-control w-5/6 bg-gray-200 my-2 px-4 py-2 rounded-lg lg:w-4/6">
            <label className="label cursor-pointer flex justify-start">
              <input
                type="radio"
                name="radio-6"
                className="radio checked:bg-blue-500 mr-5"
              />
              <span className="text-normal">{option}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;
