import React, { Component } from 'react';
import Menu from './navbar';
import BackgroundImage from './background';
import Introduction from './introduction';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <BackgroundImage />
        <Introduction />
        <Footer />
      </div>
    );
  }
}
