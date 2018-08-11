# react-rainbow-text
Generates rainbow-colored text in React.

[![package](https://img.shields.io/github/package-json/v/CharlesStover/react-rainbow-text.svg)](http://github.com/CharlesStover/delimiter/)
[![build](https://travis-ci.com/CharlesStover/react-rainbow-text.svg)](https://travis-ci.com/CharlesStover/delimiter/)
[![downloads](https://img.shields.io/npm/dt/react-rainbow-text.svg)](https://www.npmjs.com/package/delimiter)
[![minified size](https://img.shields.io/bundlephobia/min/react-rainbow-text.svg)](https://www.npmjs.com/package/delimiter)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/react-rainbow-text.svg)](https://www.npmjs.com/package/delimiter)

[![animated demo](https://user-images.githubusercontent.com/343837/43996739-f59a8678-9d8e-11e8-80c3-8ebc115b144f.gif)](https://charlesstover.com/rainbow-text)

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
[![screenshot](https://user-images.githubusercontent.com/343837/43996746-290d6ec6-9d8f-11e8-83ef-ba1edbaad6d2.png)](https://charlesstover.com/rainbow-text)

## Props

* component

  A custom component used for rendering each character.

  `<Component children={THE_CHARACTER} color={THE_COLOR} />`

* lightness

  A number from 0 to 1 to represent how dark or light the text is. Default: `0.5`

  0 is black.
  1 is white.
  0.5 is full color.

* opacity

  A number from 0 to 1 to represent the opacity of the text. Default: `1`

* saturation

  The saturation of the colors. Default: `1`

  0 is grayscale.
  1 is full color.
