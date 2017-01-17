import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import "babel-polyfill";

const urlsaqua = [
  'https://s26.postimg.org/coddrzmk9/aqua_1_1024.jpg',
  'https://s26.postimg.org/i12864agp/aqua_2_1024.jpg'
];

export default class GalleryImageAqua extends Component {
    constructor(props) {
      super(props);
      this.state = {
        images: urlsaqua,
        selectedImage: urlsaqua[0]
      }
    }

    handleClick(selectedImage) {
      this.setState({selectedImage})
    }

  render() {
    const {images, selectedImage} = this.state;

    return (
      <div className="gallery-image-aqua container">
        <div className="gallery-intro-aqua">
          <h2>Its a world of its own!</h2>
          <p>
          Big fish tanks can not only look beautiful, they will also provide for healthier environments if you choose to house a high volume of fish, living coral or plants.
          Even if you do not currently own many fish, large aquariums offer you the option to get more when you’re ready.
          <br/><br/>
          Before looking through the many large fish tanks for sale, however,
          you should first consider your aquariums placement. Hard, flat surfaces are ideal. The surface you choose should be wide enough not just for the large aquariums you are considering,
          but also wide enough for the equipment and accessories necessary to maintain them.
          <br/><br/>
          And remember, water and electricity do not mix well together. Big fish tanks will require different equipment depending on the kind of living things you house within.
          Get inspired by the many large fish tanks below here and discover how you can create an impressive underwater equipment.
          </p>
        </div>

        <div className="image-aqua-slide">
          <div className="image-aqua-selected">
            <img className="image-aqua-big" src={selectedImage} />
            <div>
              <img className="image-aqua-small img-responsive" src={selectedImage} />
            </div>
          </div>
          <div className="image-aqua-scroller">
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
