import React from "react";
import DeleteButton from "../components/DeleteButton";
import { Link } from "@reach/router";

const IndexView = (props) => {
  return (
    <div>
      <h1>Athletes</h1>
      <Link to="/create">Add an athlete</Link>
      <ul>
        <li>
          <Link to="/5">Chris Cleats</Link> | <Link to="/5/edit">Edit</Link> |{" "}
          <DeleteButton />
        </li>
      </ul>
    </div>
  );
};

export default IndexView;
