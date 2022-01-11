import React, { Fragment } from "react";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from "./global";
import { theme } from './theme';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Homepage/Homepage";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Fragment>
        <Router>
          <div className="App">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
      </Fragment>
    </ThemeProvider>

  );
}

export default App;
