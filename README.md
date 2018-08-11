# react-rainbow-text
Generates rainbow-colored text in React.

[![package](https://img.shields.io/github/package-json/v/CharlesStover/react-rainbow-text.svg)](http://github.com/CharlesStover/delimiter/)
[![build](https://travis-ci.com/CharlesStover/react-rainbow-text.svg)](https://travis-ci.com/CharlesStover/delimiter/)
[![downloads](https://img.shields.io/npm/dt/react-rainbow-text.svg)](https://www.npmjs.com/package/delimiter)
[![minified size](https://img.shields.io/bundlephobia/min/react-rainbow-text.svg)](https://www.npmjs.com/package/delimiter)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/react-rainbow-text.svg)](https://www.npmjs.com/package/delimiter)

## Install
* `npm install react-rainbow-text --save` or
* `yarn add react-rainbow-text`

## Use
```JS
import RainbowText from 'react-rainbow-text';

<RainbowText lightness={0.5} saturation={1}>
  This is an example sentence that is the color of the rainbow.
</RainbowText>
```

## Props

* component

  A custom component used for rendering each character.

  `<Component children={THE_CHARACTER} color={THE_COLOR} />`

* lightness

  A number from 0 to 1 to represent how dark or light the text is.

  0 is black.
  1 is white.
  0.5 is full color.

* saturation

  The saturation of the colors.

  0 is grayscale.
  1 is full color.
