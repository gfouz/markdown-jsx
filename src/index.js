import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./fonts/literata.ttf";
import "./fonts/expanse.otf";
import Home from "./pages/Homepage/Homepage";
import Work from "./pages/work/Work";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Post from './pages/post/Post'
import NotFound from './pages/NotFound'
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
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/post/:id"  render={(props) => <Post {...props} />} />
          </div>
        </Router>
      </ThemeProvider>
    </>
  </React.StrictMode>,
  document.getElementById("root")
);

