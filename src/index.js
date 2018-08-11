import memoizeOne from 'memoize-one';
import rainbowGradient from 'rainbow-gradient';
import React from 'react';
import Span from './span/span';

const filterWhitespaceSize = arr => arr.filter(i => i !== ' ').length;
const string2characters = string => string.split('');

export default class RainbowText extends React.PureComponent {

  _characters = memoizeOne(string2characters);
  _gradientSize = memoizeOne(filterWhitespaceSize);
  rainbowGradient = memoizeOne(rainbowGradient);
  reduceCharactersToRainbow = memoizeOne(this._reduceCharactersToRainbow);

  _reduceCharactersToRainbow(characters, opacity) {
    let whitespace = 0;
    return characters.reduce(
      (accumulator, char, index) => {
        if (char === ' ') {
          whitespace++;
          accumulator.push(' ');
        }
        else {
          accumulator.push(
            <this.Component
              children={char}
              color={
                'rgb(' +
                  this.gradient[index - whitespace].join(', ') +
                  (
                    opacity !== 1 ?
                      ', ' + opacity :
                      ''
                  ) +
                ')'
              }
              key={this.props.children.length + '-' + char + index.toString()}
            />
          );
        }
        return accumulator;
      },
      []
    );
  }

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
    return this.rainbowGradient(this.gradientSize, this.props.saturation, this.props.lightness);
  }

  get gradientSize() {
    return this._gradientSize(this.characters);
  }

  render() {
    if (typeof this.props.children !== 'string') {
      throw new Error('RainbowText only supports string children.');
    }

    return this.reduceCharactersToRainbow(
      this.characters,
      Object.prototype.hasOwnProperty.call(this.props, 'opacity') ?
        this.props.opacity :
        1
    );
  }
}
