import React, { Component } from 'react';

export default class ArticleTips extends Component {
  render() {
    return (
      <div className="container article-tips">
        <div className="row article-tips-text">
          <div className="col-md-6 beginner-tips">
            <h2><strong>Beginner Tips</strong></h2>
            <ul>
              <li><a href="https://pethelpful.com/fish-aquariums/Successful-Fish-Tank-Setup-for-Beginners">How to Set up a Fish Tank</a></li>
              <li><a href="https://pethelpful.com/fish-aquariums/How-to-Care-for-a-Fish-Tank-Aquarium-Maintenance-Tips">Maintenance Tips for Beginners</a></li>
              <li><a href="http://www.marineland.com/Guides/starting-an-aquarium-beginners.aspx">Beginners Guide to Successful Fishkeeping</a></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2><strong>Useful Links</strong></h2>
            <ul>
              <li><a href="https://pethelpful.com/fish-aquariums/Best-Fish-for-10-Gallon-Tank">Best Fish for a 10 Gallon Tank </a></li>
              <li><a href="http://aquariumadviser.com/">Best Fish Tank Filters with Reviews </a></li>
              <li><a href="https://pethelpful.com/fish-aquariums/Best-Heaters-for-a-5-Gallon-Freshwater-Aquarium">Best Heaters for a 5 Gallon Freshwater Aquarium</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
