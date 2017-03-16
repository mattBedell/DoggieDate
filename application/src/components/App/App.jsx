import React, { Component } from 'react';
import Header from './../App/Header/Header.jsx';
import Main from './../App/Main/Main.jsx';
import SideBar from './../App/SideBar/SideBar.jsx';
import Footer from  './../App/Footer/Footer.jsx';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <div className="center">
          {this.props.children}
          <SideBar />
        </div>
        <Footer />
      </div>
      );
  }
}

export default App;
