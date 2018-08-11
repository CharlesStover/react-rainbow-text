# react-rainbow-text
Generates rainbow-colored text in React.

## Install
* `npm install react-rainbow-text --save` or
* `yarn add react-rainbow-text`

## Use
```JS
import RainbowText from 'react-rainbow-text';

<RainbowText lightness={0.5} saturation={1}>
  This text has all the colors of the rainbow.
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
