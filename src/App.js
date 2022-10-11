import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import QuizPage from "./components/QuizPage/QuizPage";
import Statistics from "./components/Statistics/Statistics";
import Root from "./layouts/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "quiz/:quizId",
          loader: ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <QuizPage></QuizPage>,
        },
        { path: "statistics", element: <Statistics></Statistics> },
        { path: "blog", element: <Blog></Blog> },
        { path: "about", element: <About></About> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
