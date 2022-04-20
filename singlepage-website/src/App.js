import react from "react"
import GlobalStyle from "./GlobalStyles"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Navbar from "./compoents/Navbar/Navbar";
import Home from "./Pages/HomePage/Home";
import Footer from "./compoents/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
