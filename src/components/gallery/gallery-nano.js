import React, { Component } from 'react';

import Menu from '../home/navbar';
import Footer from '../home/footer';
import GalleryImageNano from './gallery-image-nano';

const urlsnano = [
  'https://s26.postimg.org/lhgut09o9/nano_1.jpg',
  'https://s26.postimg.org/3wnivdss9/nano_2.jpg',
  'https://s26.postimg.org/vla62wfsp/nano_3.jpg',
];

export default class GalleryNano extends Component {
  render() {
    return (
      <div>
        <Menu />
        <GalleryImageNano imageUrls={urlsnano} />
        <Footer />
      </div>
    );
  }
}
