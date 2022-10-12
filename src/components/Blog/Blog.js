import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="grid gap-8 mx-8 my-8 lg:grid-cols-3">
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://miro.medium.com/max/1400/1*sX8rBJBol5dBp5WIJQrYyw.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">The purpose of React Router</h2>
          <p>
            <small>
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </small>
          </p>
          <div className="card-actions justify-center lg:justify-start">
            <button className="btn btn-sm btn-info">More Details</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://miro.medium.com/max/1200/1*Yo1nkzOAMihE8Ia5O411PQ.jpeg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">How does context API works in react?</h2>
          <p>
            <small>
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state.
            </small>
          </p>
          <div className="card-actions justify-center lg:justify-start">
            <button className="btn btn-sm btn-info">More Details</button>
          </div>
        </div>
      </div>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--K2iR9M_L--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/19u3fzzbb3uuqy6u6h3h.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">useRef hook in react</h2>
          <p>
            <small>
              {" "}
              The useRef Hook lets us create mutable variables inside functional
              components. There are three main key points that you should keep
              in mind when using the useRef Hook: A ref created with useRef will
              be created only when the component has been mounted and preserved
              for the full lifecycle. Refs can be used for accessing DOM nodes
              or React elements, and for storing mutable variables (like with
              instance variables in class components). Updating a ref is a side
              effect so it should be done only inside a useEffect (or
              useLayoutEffect) or inside an event handler.
            </small>
          </p>
          <div className="card-actions justify-center lg:justify-start">
            <button className="btn btn-sm btn-info">More Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
