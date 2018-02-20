import React from 'react';
import {Head} from 'c/head';

export class HtmlJSX extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <html className='no-js'>
        <Head title='titular' description='descripular'></Head>
        {this.props.children}
      </html>
    );
  }
}
