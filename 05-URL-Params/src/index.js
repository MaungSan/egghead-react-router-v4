import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => (
  <Router basename={props.path}>
    <div>
      <Route
        // change path to /:page?-:subpage?
        // to allow for dashes in url 
        // example: /react-router
        path="/:page?/:subpage?"
        render={({ match }) => (
          <h1>
            PAGE: {match.params.page || "Home"}
            <br />
            SUBPAGE: {match.params.subpage}
          </h1>
        )}
      />
    </div>
  </Router>
);

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
