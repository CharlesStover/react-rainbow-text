import memoizeOne from 'memoize-one';
import rainbowGradient from 'rainbow-gradient';
import React from 'react';
import Span from './span/span';

const filterWhitespaceSize = arr => arr.filter(i => i !== ' ').length;

const reduceCharactersToRainbow = (characters, Component, gradient, opacity) => {
  let whitespace = 0;
  return characters.reduce(
    (accumulator, char, index) => {
      if (char === ' ') {
        whitespace++;
        accumulator.push(' ');
      }
      else {
        accumulator.push(
          <Component
            children={char}
            color={
              'rgb(' +
                gradient[index - whitespace].join(', ') +
                (
                  opacity !== 1 ?
                    ', ' + opacity :
                    ''
                ) +
              ')'
            }
            key={index}
          />
        );
      }
      return accumulator;
    },
    []
  );
};

const string2characters = string => string.split('');

export default class RainbowText extends React.PureComponent {

  _characters = memoizeOne(string2characters);
  _gradient = memoizeOne(rainbowGradient);
  _gradientSize = memoizeOne(filterWhitespaceSize);
  reduceCharactersToRainbow = memoizeOne(reduceCharactersToRainbow);

  get characters() {
    return this._characters(this.props.children);
  }

  get Component() {
    return (
      this.props.component ?
        this.props.compoennt :
        Span
    );
  }

  get gradient() {
    return this._gradient(
      this.gradientSize,
      Object.prototype.hasOwnProperty.call(this.props, 'saturation') ?
        this.props.saturation :
        1,
      Object.prototype.hasOwnProperty.call(this.props, 'lightness') ?
        this.props.lightness :
        0.5
    );
  }

  get gradientSize() {
    return this._gradientSize(this.characters);
  }

  get opacity() {
    return (
      Object.prototype.hasOwnProperty.call(this.props, 'opacity') ?
        this.props.opacity :
        1
    );
  }

  render() {
    if (typeof this.props.children !== 'string') {
      throw new Error('RainbowText only supports string children.');
    }

    return this.reduceCharactersToRainbow(
      this.characters,
      this.Component,
      this.gradient,
      this.opacity
    );
  }
}
