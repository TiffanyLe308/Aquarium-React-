import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import Home from './components/home/home';
import About from './components/about/about';
import GalleryNano from './components/gallery/gallery-nano';
import GalleryAqua from './components/gallery/gallery-aqua';
import News from './components/news/news';
import NoMatch from './components/no_match';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="gallery-nano" component={GalleryNano} />
    <Route path="gallery-aqua" component={GalleryAqua} />
    <Route path="news" component={News} />
    <Route path="*" component={NoMatch}/>
  </Route>
);
