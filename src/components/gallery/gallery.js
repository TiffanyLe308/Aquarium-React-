import React, { Component } from 'react';
import GalleryImage from './gallery';

const urls = [
  'https://s26.postimg.org/i7ejn34s9/aquarium.jpg',
  'https://s26.postimg.org/i7ejn34s9/aquarium.jpg',
  'https://s26.postimg.org/i7ejn34s9/aquarium.jpg',
];

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <GalleryImage imageUrls={urls} />
      </div>
    );
  }
}
