import React from "react";
import { useLoaderData } from "react-router-dom";
import Table from "../Table/Table";

const Statistics = () => {
  const dataLoader = useLoaderData();
  const questions = dataLoader.data;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-10/12 mx-auto mt-12 mb-72 lg:mt-32 lg:mb-52 lg:w-4/6">
          <thead>
            <tr>
              <th className="text-xl lg:text-2xl text-center">Topic Name</th>
              <th className="text-xl lg:text-2xl text-center">
                Total Questions
              </th>
            </tr>
          </thead>
          <tbody className="text-lg text-center lg:text-xl">
            {questions.map((question) => (
              <Table key={question.id} question={question}></Table>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Statistics;
