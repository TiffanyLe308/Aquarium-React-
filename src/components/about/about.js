import React, { Component } from 'react';

import Menu from '../home/navbar';
import AboutUs from './about_us';
import Footer from '../home/footer';

export default class About extends Component {
  render() {
    return (
      <div>
        <Menu />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}
