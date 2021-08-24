import React from "react";

import { Router } from "@reach/router";
import IndexView from "./views/IndexView";
import CreateView from "./views/CreateView";
import DetailView from "./views/DetailsView";
import EditView from "./views/EditView";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <IndexView path="/" />
        <CreateView path="/create" />
        <DetailView path="/:id" />
        <EditView path="/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
