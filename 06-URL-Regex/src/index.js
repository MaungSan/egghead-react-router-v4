import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = props => (
  <Router basename={props.path}>
    <div>
      <Route
        // must enter date and domain name
        // example: /07-05-2018.hmtl
        path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
        render={({ match }) => (
          <h1>
            paramA: {match.params.a}
            <br />
            paramB: {match.params.b}
          </h1>
        )}
      />
    </div>
  </Router>
);

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
