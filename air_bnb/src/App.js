import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Searchpage from "./Searchpage";
import Catégorie from "./Catégorie";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
            <Header />
            <Searchpage />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Catégorie />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
