import React, { Component } from 'react';

export default class ArticleTips extends Component {
  render() {
    return (
      <div className="container article-tips">
        <div className="row">
          <div className="col-md-6 beginner-tip">
            <h2><em><strong>Beginner Tips</strong></em></h2>
            <p>So you have all the gear but no idea? Before you start anything it is important that you carefully choose where you want to place the tank.
            These tips below can help you.</p>
            <ul>
              <li><a href="http://aquariuminfo.org/beginner.html"><i className="fa fa-arrow-circle-right"></i> How to Set up a Fish Tank</a></li>
              <li><a href="https://pethelpful.com/fish-aquariums/How-to-Care-for-a-Fish-Tank-Aquarium-Maintenance-Tips"><i className="fa fa-arrow-circle-right"></i> Maintenance Tips for Beginners</a></li>
              <li><a href="http://www.marineland.com/Guides/starting-an-aquarium-beginners.aspx"><i className="fa fa-arrow-circle-right"></i> Beginners Guide to Successful Fishkeeping</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <img className="img-responsive" src="../../images/IMG_166595.jpg" />
          </div>
        </div>

        <div className="row useful-link">
          <div className="col-md-6">
            <img className="img-responsive" src="../../images/IMG_166596.jpg" />
          </div>
          <div className="col-md-6">
            <h2><em><strong>Useful Links</strong></em></h2>
            <p>This is a list of link which contains useful information from other aquarium websites by other hobbyists.</p>
            <ul>
              <li><a href="https://pethelpful.com/fish-aquariums/Best-Fish-for-10-Gallon-Tank"><i className="fa fa-arrow-circle-right"></i> Best Fish for a 10 Gallon Tank </a></li>
              <li><a href="http://aquariumadviser.com/"><i className="fa fa-arrow-circle-right"></i> Best Fish Tank Filters with Reviews </a></li>
              <li><a href="https://pethelpful.com/fish-aquariums/Best-Heaters-for-a-5-Gallon-Freshwater-Aquarium"><i className="fa fa-arrow-circle-right"></i> Best Heaters for a 5 Gallon Freshwater Aquarium</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
