import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <h3>Follow us</h3>
          <div className="social_icons">
            <a href="https://www.facebook.com/groups/180787488662434/"><i className="fa fa-facebook-square fa-2x"></i></a>
            <a href="https://www.instagram.com/scaped_aquariumgram/"><i className="fa fa-instagram fa-2x"></i></a>
            <a href="https://fi.pinterest.com/explore/nano-aquarium/"><i className="fa fa-pinterest-square fa-2x"></i></a>
          </div>
          <div className="copy">
              <p><strong><i>&copy; 2017 Aquarium Nerd</i></strong></p>
          </div>
      </div>
    );
  }
}
