import React, { Component, PropTypes } from 'react';

export default class GalleryImage extends Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery">
        <div className="images">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}

GalleryImage.propTypes = {
  imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
