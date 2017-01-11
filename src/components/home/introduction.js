import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class Introduction extends Component {
  render() {
    return(
      <div className="container intro">
        <h1>Welcome to our website</h1>
        <p>We strive to bring aquarium hobbyists the best information, news and picture available to successfully create and maintain their own aquarium.
          Welcome to the community, we look forward to getting to know you and your aquarium! </p>
        <Row className="intro-pic">
          <Col md={4}>
            <img className="img-responsive" src="../../images/IMG_166590.jpg" />
            <h3><strong><i>Aquarium Maintenance</i></strong></h3>
            <p>Good aquarium maintenance practices will lead to a healthy aquatic environment and thriving fish, providing years of joy for the hobbyist.</p>
          </Col>
          <Col md={4}>
            <img className="img-responsive intro-pic-item" src="../../images/IMG_166592.jpg" />
            <h3><strong><i>Aquarium Volume</i></strong></h3>
            <p> Water volume is needed to ensure you treat your aquarium with the correct dosage of  medication, fish stocking levels, and filters setup .</p>
          </Col>
          <Col md={4}>
            <img className="img-responsive intro-pic-item" src="../../images/IMG_166591.jpg" />
            <h3><strong><i>Aquarium Fish Care</i></strong></h3>
            <p>Watching your aquarium is the source of enjoyment you get from your aquarium, so take the time to watch for unusual behavior and signs of illness or distress.</p>
          </Col>
        </Row>
      </div>
    );
  }
}
