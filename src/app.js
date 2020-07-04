import React from 'react';
import Footer from './modules/Footer.js';
import Header from './modules/Header.js';
// import Resty from './components/resty.js';

// import './app.scss';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <Resty /> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;