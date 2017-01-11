import React, { Component } from 'react';

import Menu from '../home/navbar';
import Footer from '../home/footer';
import GalleryImageAqua from './gallery-image-aqua';

const urlsaqua = [
  '../../../images/Gallery/aqua_1.jpg',
  '../../../images/Gallery/aqua_2.jpg'
];

export default class GalleryAqua extends Component {
  render() {
    return (
      <div>
        <Menu />
        <GalleryImageAqua imgUrls={urlsaqua} />
        <Footer />
      </div>
    );
  }
}
