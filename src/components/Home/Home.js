import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Topic from "../Topic/Topic";

const Home = () => {
  const loadData = useLoaderData();
  const topics = loadData.data;
  return (
    <div>
      <Header></Header>
      <div className="bg-blue-100 grid grid-cols-1 p-4 gap-4 lg:grid lg:grid-cols-4">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
