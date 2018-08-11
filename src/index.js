import React from 'react';
import Span from './span/span';

export default class RainbowText extends React.PureComponent {

  mapCharToRainbow(char, index) {
    return (
      <Span
        children={char}
        color="#FF0000"
      />
    );
  }

  render() {
    if (typeof this.props.children !== 'string') {
      throw new Error('RainbowText only supports string children.');
    }

    return this.props.children.splice('').map(this.mapCharToRainbow);
  }
}
