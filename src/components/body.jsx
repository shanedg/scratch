import React, { Component } from 'react';

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article>
        <section>
          <h1>hi, planet</h1>
          <button>hi</button>
          {this.props.children}
        </section>
      </article>
    );
  }
}
