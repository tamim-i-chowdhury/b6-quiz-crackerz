import React from "react";
import logo from "../../assets/images/quiz_image.jpeg";
const Header = () => {
  return (
    <div>
      <div className="hero bg-blue-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={logo} className="max-w-xs rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-3xl text-center mt-4 font-bold lg:text-5xl lg:text-start">
              The Purpose of Quiz!
            </h1>
            <p className="py-6 text-center lg:text-start">
              A quiz is a quick and informal assessment of student knowledge.
              Quizzes are often used in North American higher education
              environments to briefly test a students' level of comprehension
              regarding course material, providing teachers with insights into
              student progress and any existing knowledge gaps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
