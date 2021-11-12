import React from 'react';
import Footer from './lyout/Footer';
import Header from './lyout/Header';
import Main from './lyout/Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }


  render() {
    return (
      <>
        <Header/>
        <Main/>
        <Footer/>

      </>
    );
  }
}


export default App;
