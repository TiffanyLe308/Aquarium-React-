import React, { Component } from 'react';

export default class AboutUs extends Component {
  render() {
    return (
      <div className="container about-us">
        <div className="background-about"></div>
        <div className="row info-about">
          <div className="col-md-10">
            <p>
            Here at AquariumNerd.net we try to offer you all the information you need whether you are a beginner or more advanced aquarist.
            If you are looking for answers, or are just curious and starting your research, we have gotten you covered! If there is something you think we have missed,
            or something that you would like to have answered please send an email to our email address: aquariumnerd.net@gmail.com. <br/>
            <br/>
            We hope to provide accurate and useful information so please do not hesitate to drop us a line.
            Technology continues to grow in the aquarium industry and so does our knowledge, aquariums are soon becoming one of the most popular hobbies and pets,
            due to their association with modern day peace and the joy of having a fragile ecosystem in the palm of your hands.<br/>
            <br/>
            Cheers,<br/>
            Aquarium Nerd Info Team </p>
          </div>
          <div className="col-md-2"><img className="img-responsive" src="../../images/IMG_166603.jpg" /></div>
        </div>
      </div>
    );
  }
}
