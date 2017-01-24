import React, { Component } from 'react';

import Menu from '../home/navbar';
import Footer from '../home/footer';
import GalleryImageNano from './gallery-image-nano';
import CommentBox from '../comment/comment';

export default class GalleryNano extends Component {
  render() {
    return (
      <div>
        <Menu />
        <GalleryImageNano />
        <CommentBox url="../../../comments.json" pollInterval={2000} />
        <Footer />
      </div>
    );
  }
}
