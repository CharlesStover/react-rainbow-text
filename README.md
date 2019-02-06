# Rainbow Text for React [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Beautifully%20rainbowify%20your%20text%20with%20the%20<RainbowText>%20React%20component.%20pic.twitter.com/moyzdOUjdg&url=https://github.com/CharlesStover/react-rainbow-text&via=CharlesStover&hashtags=react,reactjs,javascript,webdev,webdeveloper,webdevelopment)

Generates rainbow-colored text in React.

[![version](https://img.shields.io/npm/v/react-rainbow-text.svg)](https://www.npmjs.com/package/react-rainbow-text)
[![minified size](https://img.shields.io/bundlephobia/min/react-rainbow-text.svg)](https://www.npmjs.com/package/react-rainbow-text)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/react-rainbow-text.svg)](https://www.npmjs.com/package/react-rainbow-text)
[![downloads](https://img.shields.io/npm/dt/react-rainbow-text.svg)](https://www.npmjs.com/package/react-rainbow-text)
[![build](https://travis-ci.com/CharlesStover/react-rainbow-text.svg)](https://travis-ci.com/CharlesStover/react-rainbow-text/)

[![animated demo](https://user-images.githubusercontent.com/343837/43996739-f59a8678-9d8e-11e8-80c3-8ebc115b144f.gif)](https://charlesstover.github.io/rainbow-text/)

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
[![screenshot](https://user-images.githubusercontent.com/343837/43996746-290d6ec6-9d8f-11e8-83ef-ba1edbaad6d2.png)](https://charlesstover.github.io/rainbow-text/)

## Props

* component

  A custom component used for rendering each character.

  `<Component children={THE_CHARACTER} color={THE_COLOR} />`

* lightness

  A number from 0 to 1 to represent how dark or light the text is. Default: `0.5`

  0 is black.
  1 is white.
  0.5 is full color.
  
  **Example of 0.25 Lightness:**

  [![image](https://user-images.githubusercontent.com/343837/44053946-ca2c27c0-9f06-11e8-820d-47d82f51ed0d.png)](https://charlesstover.github.io/rainbow-text/)
  
  **Example of 0.75 Lightness:**

  [![image](https://user-images.githubusercontent.com/343837/44053965-d983bc1a-9f06-11e8-9d09-2f8693a849e5.png)](https://charlesstover.github.io/rainbow-text/)

* opacity

  A number from 0 to 1 to represent the opacity of the text. Default: `1`

* saturation

  The saturation of the colors. Default: `1`

  0 is grayscale.
  1 is full color.

  **Example of 0.5 Saturation:**
  
  [![image](https://user-images.githubusercontent.com/343837/44053997-fc2e5c84-9f06-11e8-9c8b-286fc106881c.png)](https://charlesstover.github.io/rainbow-text/)
  
  **Example of 0.25 Saturation:**
  
  [![image](https://user-images.githubusercontent.com/343837/44054021-0d4b446e-9f07-11e8-8b2e-c546199f395a.png)](https://charlesstover.github.io/rainbow-text/)
