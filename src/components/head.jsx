import React from 'react';

export class Head extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>{this.props.title}</title>
        <meta name='description' content={this.props.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        {this.props.children}
      </head>
    );
  }
}
