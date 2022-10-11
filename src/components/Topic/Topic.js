import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/quiz/${id}`);
  };
  return (
    <div className="card w-full bg-gray-800">
      <figure className="px-10 pt-10">
        <img src={logo} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl text-white lg:text-3xl">{name}</h2>
        <p className="text-white text-xl mb-2 lg:text-lg">
          Total questions on this topic - {total}
        </p>
        <div className="card-actions">
          <button
            onClick={handleNavigate}
            className="btn btn-info btn-md rounded-full hover:btn-success lg:btn-wide lg:rounded-lg"
          >
            Take a Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
