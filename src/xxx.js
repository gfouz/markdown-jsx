import React, {Fragment, useState} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";
import Sidebar from "./components/sidebar/Sidebar";
import Button from './components/button/Button';
import './App.css';

function App() {
  
   const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyles />
          
          <h1>PORTFOLIO {new Date().getFullYear()} .</h1>
        
        <div>
          <Button open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
          
        </div>
      </Fragment>
    </ThemeProvider>
  );
}
export default App;
