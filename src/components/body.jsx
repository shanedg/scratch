import React from 'react';
import GTMBody from 'c/google-tag-manager/gtm-body';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body>
        <GTMBody gtmId={this.props.gtmId} />
        {this.props.children}
      </body>
    );
  }
}
