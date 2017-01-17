import React, { Component, PropTypes } from 'react';
import "babel-polyfill";

const urlsnano = [
  'https://s26.postimg.org/i56lzz9ix/nano_1_640.jpg',
  'https://s26.postimg.org/76vchskxl/nano_2_640.jpg',
  'https://s26.postimg.org/uz4ntbmyh/nano_3_640.jpg',
  'https://s26.postimg.org/4fc2r6mex/nano_4_640.jpg'
];

export default class GalleryImageNano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: urlsnano,
      selectedImage: urlsnano[0]
    }
  }

  handleClick(selectedImage) {
    this.setState({selectedImage})
  }

  render() {
    const {images, selectedImage} = this.state;

    return (
      <div className="gallery-image-nano container">
        <div className="gallery-intro-nano">
          <h2>The little paradise for your own place</h2>
          <p>
          A nano aquariums compact footprint make it a perfect fit for that empty corner or bare wall,
          and with the advances in multi-stage filtration and compact fluorescent lighting, maintaining a thriving freshwater system is easier than ever.
          The trendy full-of-life glass cube is an eye-catcher on a shelf, a sideboard, a desk or in a suitable cabinet as a stand-alone attraction.
          <br/><br/>
          Small-volume aquariums also demand special attention because changes in water quality, temperature, and fish stress levels
          become more pronounced in aquariums less than 30 gallons. With patience, research, and a little extra diligence,
          you too can create a beautiful, healthy nano-system. Here are some of them.
          </p>
        </div>

        <div className="image-nano-slide">
          <div className="image-nano-selected">
            <div>
              <img className="img-responsive" src={selectedImage} />
            </div>
          </div>
          <div className="image-nano-scroller">
            {images.map((image, index) => (
              <div key={index} onClick={this.handleClick.bind(this,image)}>
                <img src={image}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
