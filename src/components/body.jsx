import React, { Component } from 'react';
import GTMBody from 'c/google-tag-manager/gtm-body';

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <body>
        <GTMBody gtmId={this.props.gtmId} />
        <article>
          <section>
            <h1>hi, planet</h1>
            <button>hi</button>
            {this.props.children}
          </section>
        </article>
      </body>
    );
  }
}
