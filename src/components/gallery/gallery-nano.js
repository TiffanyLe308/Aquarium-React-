import React, { Component } from 'react';

import Menu from '../home/navbar';
import Footer from '../home/footer';
import GalleryImageNano from './gallery-image-nano';

export default class GalleryNano extends Component {
  render() {
    return (
      <div>
        <Menu />
        <GalleryImageNano />
        <Footer />
      </div>
    );
  }
}
