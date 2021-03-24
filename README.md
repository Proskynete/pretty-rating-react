# Pretty rating React <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png" width="25" height="25" />

A small and simple library that transform you rating in icons for you web

![Pretty rating React](https://imgur.com/Pd1vf7k.png 'How to see pretty-rating-react')

## Status

![Version](https://img.shields.io/npm/v/pretty-rating-react.svg) [![Build Status](https://travis-ci.org/Proskynete/pretty-rating-react.svg?branch=master)](https://travis-ci.org/Proskynete/pretty-rating-react) [![Coverage Status](https://coveralls.io/repos/github/Proskynete/pretty-rating-react/badge.svg?branch=master)](https://coveralls.io/github/Proskynete/pretty-rating-react?branch=master) [![dependencies Status](https://david-dm.org/proskynete/pretty-rating-react/status.svg)](https://david-dm.org/proskynete/pretty-rating-react) [![devDependencies Status](https://david-dm.org/proskynete/pretty-rating-react/dev-status.svg)](https://david-dm.org/proskynete/pretty-rating-react?type=dev) [![peerDependencies Status](https://david-dm.org/proskynete/pretty-rating-react/peer-status.svg)](https://david-dm.org/proskynete/pretty-rating-react?type=peer)

## Getting started

To install as npm dependency

```sh
npm i pretty-rating-react
```

## API Documentation

### PrettyRating

This is the wrapper component that creates the pretty format of our rating.

| Name        | Type                      | Required | Default value                                                             | Values Allowed                               | Description                                                                                                                                  |
| ----------- | ------------------------- | -------- | ------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| value       | number                    | true     | -                                                                         | Positive integers or floats                  | Rating that we will transform to icons.                                                                                                      |
| icons       | object                    | false    | `complete` and `empty` with *_faStar_* and `half` with *_faStarHalfAlt_*  | Each keys allow string or FontAwesome´s icon | Object with 3 states: complete when the rating number is integer, half when it is floating and empty to fill if it is missing for the total. |
| max         | number                    | false    | 5                                                                         | Positive integers                            | Number of icons to create.                                                                                                                   |
| colors      | array                     | false    | ["#000", "#000", "#000"]                                                  | Hexadecimal - RGB - HSLA - Color Names       | Colors with which icons are rendered.                                                                                                        |

The `max` prop determines the number of icons to render, it's related to `value`. So, if the`max` is 5, the rating must be from 0 to 5.
The indexes of array of `colors` prop represent the color to icons to render. colors[0] is for the`complete` icons, colors[1] is for the `half` icons and colors[2] is for the `empty` icons.

## How to use it

The following snippet will show you how to use the library: (Example with icons of [FontAwesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react))

**Using function components (_without Typescript_):**

```js
import React from 'react';
import PrettyRating from "pretty-rating-react";
import {
  faHeart,
  faStar,
  faHeartBroken,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
  heart: {
    complete: faHeart,
    half: faHeartBroken,
    empty: farHeart,
  },
};

const colors = {
 star: ['#d9ad26', '#d9ad26', '#434b4d'],
 heart: ['#9b111e', '#a83f39'],
};

const Main = () => (
 <div>
  <div>
   <h1>Assesment</h1>
   <PrettyRating value={5} icons={icons.star} colors={colors.star} />
  </div>

  <div>
   <h1>Assesment</h1>
   <PrettyRating value={3.5} icons={icons.star} colors={colors.star} />
  </div>

  <div>
   <h1>6.5/10 life points</h1>
   <PrettyRating value={6.5} icons={icons.heart} colors={colors.heart} max={10} />
  </div>

  <div>
   <h1>Full life points</h1>
   <PrettyRating value={10} icons={icons.heart} colors={colors.heart} max={10} />
  </div>
 </div>
);
```

**Using function components (_with Typescript_):**

```js
import React from 'react';
import PrettyRating, { IconsInterface } from "pretty-rating-react";
import {
  faHeart,
  faHeartBroken,
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

interface CustomIconsInterface {
  star: IconsInterface;
  heart: IconsInterface;
}

const icons: CustomIconsInterface = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
  heart: {
    complete: faHeart,
    half: faHeartBroken,
    empty: farHeart,
  },
};

const colors = {
 star: ['#d9ad26', '#d9ad26', '#434b4d'],
 heart: ['#9b111e', '#a83f39'],
};

const Main = () => (
 <div>
  <div>
   <h1>Assesment</h1>
   <PrettyRating value={5} icons={icons.star} colors={colors.star} />
  </div>

  <div>
   <h1>Assesment</h1>
   <PrettyRating value={3.5} icons={icons.star} colors={colors.star} />
  </div>

  <div>
   <h1>6.5/10 life points</h1>
   <PrettyRating value={6.5} icons={icons.heart} colors={colors.heart} max={10} />
  </div>

  <div>
   <h1>Full life points</h1>
   <PrettyRating value={10} icons={icons.heart} colors={colors.heart} max={10} />
  </div>
 </div>
);
```

## License

MIT (c) - Eduardo Álvarez
