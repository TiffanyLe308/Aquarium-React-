import React, { Component } from 'react';

import Menu from '../home/navbar';
import NewsArticle from './news_article';
import Footer from '../home/footer';

export default class News extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Footer />
      </div>
    );
  }
}
