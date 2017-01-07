import React, { Component } from 'react';

import Menu from '../home/navbar';
import Footer from '../home/footer';
import GalleryImage from './gallery-image';

const urls = [
  'https://s26.postimg.org/i7ejn34s9/aquarium.jpg',
  'https://s26.postimg.org/i7ejn34s9/aquarium.jpg',
  'https://s26.postimg.org/i7ejn34s9/aquarium.jpg',
];

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <Menu />
        <GalleryImage imageUrls={urls} />
        <Footer />
      </div>
    );
  }
}
