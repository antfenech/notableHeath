import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

const listCSS = array =>
  map(array, (path, index) =>
    <link rel="stylesheet" type="text/css" key={index} href={path} />);


const listJS = array =>
  map(array, (path, index) =>
    <script key={index} src={path} />);

export default class HTML extends Component {
  render() {
    return (
      <html>
      <head lang="en">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto" />
        <title>{ this.props.page.title }</title>
        {listCSS(this.props.page.cssArray)}
      </head>
      <body>
      <div    id="app-mount" dangerouslySetInnerHTML={{ __html: this.props.children }} />
      <script id="app-state" dangerouslySetInnerHTML={{ __html: this.props.state }} />
      {listJS(this.props.page.jsArray)}
      </body>
      </html>
    );
  }
}

HTML.propTypes = {
  page: PropTypes.object,
  children: PropTypes.string.isRequired,
  state: PropTypes.string,
};
