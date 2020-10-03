import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddNew from "./screens/AddNew";
import Genres from "./screens/Genres";
import Info from "./screens/Info";
import Subgenre from "./screens/Subgenre";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Genres} />
      <Route path="/subgenre" component={Subgenre} />
      <Route path="/addnew" component={AddNew} />
      <Route path="/info" component={Info} />
    </Router>
  );
}

export default App;
