import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import ToDoList from './components/ToDo.js';

import './app.scss';


function app() {
  return (
    <React.Fragment>
      <Header />
      <ToDoList />
      <Footer />
    </React.Fragment>
  );
} // end of app function 

export default app;