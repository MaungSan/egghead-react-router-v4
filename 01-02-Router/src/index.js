import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";

const Home = props => {
  console.log(props);
  return <h1>Home</h1>;
};

const App = props => (
  <Router basename={props.path}>
    <div>
      <Route exact path="/" component={Home} />
      {/*<Route path="/about" render={() => <h1>About</h1>} />*/}
      <Route path="/about" children={({ match }) => match && <h1>About</h1>} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
