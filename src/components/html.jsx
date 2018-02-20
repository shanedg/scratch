import React from 'react';
import {Head} from 'c/head';
import {Body} from 'c/body';

export class HtmlJSX extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let gtmId = 'GTM-W9K5B8F';
    let head = {
      'title': 'titular title',
      'description': 'describing the description',
      'gtmId': gtmId
    };

    return (
      <html className='no-js'>
        <Head options={head}></Head>
        <Body gtmId={gtmId}>
          {this.props.children}
        </Body>
      </html>
    );
  }
}
