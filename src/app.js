import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from './modules/Footer.js';
import Header from './modules/Header.js';
// import Resty from './components/resty.js';

// import './app.scss';

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <Header />
        {/* <Resty /> */}
        <Footer />
        </BrowserRouter>
    );
  }
}

export default App;