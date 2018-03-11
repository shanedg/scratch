import React, { Component } from 'react';

export default class Body extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let page = {
      'position': 'absolute',
      'left': '50%',
      'top': '60%',
      'transform': 'translate(-50%, -50%)',
      'width': '100%',
      'minWidth': '200px',
      'minWeight': '300px',
      'padding': '1rem',
      'boxSizing': 'border-box',
    };

    let presentation = {
      'textAlign': 'right',
    };

    let h1 = {
      'fontSize': '3rem',
      'lineHeight': '1',
      'fontFamily': 'monospace',
    };

    let btn = {
      'fontSize': '2rem',
      'lineHeight': '1',
      'padding': '1rem 3rem',
      'background': 'rebeccapurple',
      'color': 'white',
      'borderStyle': 'none',
      'fontFamily': 'monospace',
      'cursor': 'pointer',

      'animationName': 'ripple',
      'animationTimingFunction': 'ease-out',
      'animationDuration': '800ms',
      'animationDelay': '1000ms',
      'animationIterationCount': 1,
      'animationDirection': 'normal',
      'animationFillMode': 'forwards'
    };

    let keyFrame = `
      @-webkit-keyframes ripple {
        25% {-webkit-transform:translate(-10px, 0)}
        35% {-webkit-transfrom:translate(-7px, 0)}
        60% {-webkit-transform:translate(0, 0)}
        75% {-webkit-transform:translate(-4px, 0)}
        85% {-webkit-transform:translate(-2px, 0)}
      }
    `;

    return (
      <div className='page' style={page}>
        <style dangerouslySetInnerHTML={{
          __html: `${keyFrame}`
        }} />
        <article>
          <div className='presentation' style={presentation}>
            <section>
              <h1 style={h1}>hi, planet</h1>
              {this.props.children}
              <button style={btn}>hey</button>
            </section>
          </div>
        </article>
      </div>
    );
  }
}
