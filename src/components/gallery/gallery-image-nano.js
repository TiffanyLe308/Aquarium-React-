import React, { Component, PropTypes } from 'react';

export default class GalleryImageNano extends Component {
  renderImage(imageUrl) {
    return (
      <div>
        <img src={imageUrl} />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery-image-nano container">
        <div className="gallery-intro-nano">
          <h2>The little paradise for your own place</h2>
          <p>
          A nano aquariums compact footprint make it a perfect fit for that empty corner or bare wall,
          and with the advances in multi-stage filtration and compact fluorescent lighting, maintaining a thriving freshwater system is easier than ever.
          The trendy full-of-life glass cube is an eye-catcher on a shelf, a sideboard, a desk or in a suitable cabinet as a stand-alone attraction.
          Small-volume aquariums also demand special attention because changes in water quality, temperature, and fish stress levels
          become more pronounced in aquariums less than 30 gallons. With patience, research, and a little extra diligence,
          you too can create a beautiful, healthy nano-system. Here are some of them.
          </p>
        </div>
        <div className="images-nano">
          {this.props.imageUrls.map(imageUrl => this.renderImage(imageUrl))}
        </div>
      </div>
    );
  }
}

GalleryImageNano.propTypes = {
  imageUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
