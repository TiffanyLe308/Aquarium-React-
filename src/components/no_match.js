import React, { Component } from 'react';
import { Route, IndexRoute, Link } from 'react-router';

export default class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>NoMatch</h2>
        <div>404 error</div>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
