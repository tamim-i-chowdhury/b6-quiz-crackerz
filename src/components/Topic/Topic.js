import React from "react";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
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
          <button className="btn btn-primary text-lg lg:text-base">
            Take a Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topic;
