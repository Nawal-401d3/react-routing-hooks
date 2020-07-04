import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import './index.css';
import App from './app.js';

class EntryPoint extends React.Component{
    render(){
      return (
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
    }
  }

ReactDOM.render(<EntryPoint />, document.getElementById('root'));