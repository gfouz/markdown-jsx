import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/literata.ttf";
import "./fonts/expanse.otf";
import Home from "./pages/Homepage/Homepage";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Contact from "./pages/Contact/Contact";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/work" component={Work} />
            <Route exact path="/contact" component={Contact} />
          </div>
        </Router>
      </ThemeProvider>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

