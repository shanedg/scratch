import React, { Component } from 'react';
import GTMHead from 'c/google-tag-manager/gtm-head';

export default class Head extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <head>
        <GTMHead gtmId={this.props.options.gtmId} />
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <title>{this.props.options.title}</title>
        <meta name='description' content={this.props.options.description} />
        <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
        <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA/4QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERERERERERERAAAAAAAAERAQAAAAAAEBEAEAAAAAEAEQABAAAAEAARAAAQAAEAABEAAAEAEAAAEQAAABEAAAARAAAAEQAAABEAAAEAEAAAEQAAEAABAAARAAEAAAAQABEAEAAAAAEAEQEAAAAAABAREAAAAAAAAREREREREREREAAAAAP/wAAF/6AABv9gAAd+4AAHveAAB9vgAAfn4AAH5+AAB9vgAAe94AAHfuAABv9gAAX/oAAD/8AAAAAAAA" rel="icon" type="image/x-icon" />
        {this.props.children}
      </head>
    );
  }
}
