import React, { Component } from 'react';

export default class IntroArticle extends Component {
  render() {
    return (
      <div className="background-article">
        <div className="container intro-article">
          <span className="intro-article-text">
            <strong>Latest News</strong> <br/>
            <em>
              <a className="intro-article-link" href="#">Read more <i className="fa fa-arrow-circle-right"></i></a>
            </em>
            </span>
        </div>
      </div>
    );
  }
}
