import React from 'react';
import ReactDOMServer from 'react-dom/server';

export class Head extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <head>


        {this.props.children}
      </head>
    );
  }
}
