import React, { Component } from 'react';

import Menu from '../home/navbar';
import Footer from '../home/footer';
import GalleryImageAqua from './gallery-image-aqua';

export default class GalleryAqua extends Component {
  render() {
    return (
      <div>
        <Menu />
        <GalleryImageAqua />
        <Footer />
      </div>
    );
  }
}
