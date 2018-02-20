import React from 'react';

export class GTMBody extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <noscript>
        <iframe src={`https://www.googletagmanager.com/ns.html?id=${this.props.gtmId}`} height='0' width='0' style={{'display': 'none', 'visibility': 'hidden'}}/>
      </noscript>
    );
  }
}
