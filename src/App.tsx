import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header";
import Home from "./view/Home";
import NotFound from "./view/NotFound";

const Main = styled.div`
  min-width: 375px;
  margin:0 auto;
  color: #FFF;
  background-color: #101019;
  @media (max-width: 750px) {
		background: #F8F0FF;
	}
`

export const THE_GRAPH_URL = "https://api.thegraph.com/subgraphs/name/shimonxie/themisdaobsc"

function App() {
  return (
    <Main>
      <Header />
      <Router basename="/">
        <Switch>
          <Route key="home" path="/" exact component={Home} />
          <Route key="not" component={NotFound} />
        </Switch>
      </Router>
    </Main>
  );
}

export default App;
