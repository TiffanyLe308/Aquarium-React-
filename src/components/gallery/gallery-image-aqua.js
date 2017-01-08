import React, { Component, PropTypes } from 'react';

export default class GalleryImageAqua extends Component {
  renderImage(imgUrl) {
    return (
      <div>
        <img src={imgUrl} />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery-image-aqua container">
        <div className="gallery-intro-aqua">
          <h2>Its a world of its own!</h2>
          <p>
          Water and electricity do not mix well together. Keeping your setup simple with a single power board and powerpoint is ideal.
          Big fish tanks can not only look beautiful, they will also provide for healthier environments if you choose to house a high volume of fish, living coral or plants.
          Even if you do not currently own many fish, large aquariums offer you the option to get more when you’re ready. Before looking through the many large fish tanks for sale, however,
          you should first consider your aquariums placement. Hard, flat surfaces are ideal. The surface you choose should be wide enough not just for the large aquariums you are considering,
          but also wide enough for the equipment and accessories necessary to maintain them.
          Big fish tanks will require different equipment depending on the kind of living things you house within.
          Get inspired by the many large fish tanks below here and discover how you can create an impressive underwater equipment.
          </p>
        </div>
        <div className="images-aqua">
          {this.props.imgUrls.map(imgUrl => this.renderImage(imgUrl))}
        </div>
      </div>
    );
  }
}

GalleryImageAqua.propTypes = {
  imgUrls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
