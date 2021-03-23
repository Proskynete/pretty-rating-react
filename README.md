# Pretty rating React

A small and simple library that transform you rating in icons for you web

![Pretty rating React](https://imgur.com/Pd1vf7k.png 'How to see pretty-rating-react')

## Status

![Version](https://img.shields.io/npm/v/pretty-rating-react.svg) [![Build Status](https://travis-ci.org/Proskynete/pretty-rating-react.svg?branch=master)](https://travis-ci.org/Proskynete/pretty-rating-react) [![Coverage Status](https://coveralls.io/repos/github/Proskynete/pretty-rating-react/badge.svg?branch=master)](https://coveralls.io/github/Proskynete/pretty-rating-react?branch=master) [![dependencies Status](https://david-dm.org/proskynete/pretty-rating-react/status.svg)](https://david-dm.org/proskynete/pretty-rating-react) [![devDependencies Status](https://david-dm.org/proskynete/pretty-rating-react/dev-status.svg)](https://david-dm.org/proskynete/pretty-rating-react?type=dev) [![peerDependencies Status](https://david-dm.org/proskynete/pretty-rating-react/peer-status.svg)](https://david-dm.org/proskynete/pretty-rating-react?type=peer)

## Getting started

To install as npm dev dependency

```sh
npm install pretty-rating-react --save-dev
```

## API Documentation

### PrettyRating

This is the wrapper component that creates the pretty format of our rating.

| Name        | Type   | Required | Default value      | Values Allowed                                           | Description                            |
| ----------- | ------ | -------- | ------------------ | -------------------------------------------------------- | -------------------------------------- |
| rating      | number | true     | -                  | Positive floats or integers numbers                      | Rating that we will transform to icons |
| icons       | object | true     | -                  | This object receive 3 attributes (complete, half, empty) | Class names foreach element           |
| iconsNumber | number | false    | 5                  | Positive integers numbers                                | Number of icons to create              |
| setColors   | array  | false    | [#000, #000, #000] | Hexadecimal colors                                       | Colors with which icons are rendered   |

The `iconsNumber` determines the number of icons to render, it's related to `rating`. So, if the `iconsNumber` is 5, the rating must be from 0 to 5.

## How to use it

The following snippet will show you how to use the library: (Example with icons of [FontAwesome](https://fontawesome.com/))

**_Using class components:_**

```js
import React, { Component } from 'react';
import PrettyRating from 'pretty-rating-react';

class Main extends Component {
 render() {
  const icons = {
   star: {
    complete: 'fa fa-star',
    half: 'fas fa-star-half-alt',
    empty: 'far fa-star',
   },
   heart: {
    complete: 'fas fa-heart',
    half: 'fas fa-heart-broken',
    empty: 'fas fa-heart',
   },
  };

  const colors = {
   star: ['#d9ad26', '#d9ad26', '#434b4d'],
   heart: ['#9b111e', '#a83f39'],
  };

  return (
   <div>
    <div>
     <h1>Assesment</h1>
     <PrettyRating rating={5} icons={icons.star} setColors={colors.star} />
    </div>

    <div>
     <h1>Assesment</h1>
     <PrettyRating
      rating={3.5}
      icons={icons.star}
      setColors={colors.star}
     />
    </div>

    <div>
     <h1>6.5/10 life points </h1>
     <PrettyRating
      rating={6.5}
      icons={icons.heart}
      setColors={colors.heart}
      iconsNumber={10}
     />
    </div>

    <div>
     <h1>Full life points </h1>
     <PrettyRating
      rating={10}
      icons={icons.heart}
      setColors={colors.heart}
      iconsNumber={10}
     />
    </div>
   </div>
  );
 }
}
```

**_Using function components:_**

```js
import React from 'react';
import PrettyRating from 'pretty-rating-react';

const icons = {
 star: {
  complete: 'fa fa-star',
  half: 'fas fa-star-half-alt',
  empty: 'far fa-star',
 },
 heart: {
  complete: 'fas fa-heart',
  half: 'fas fa-heart-broken',
  empty: 'fas fa-heart',
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
   <PrettyRating rating={5} icons={icons.star} setColors={colors.star} />
  </div>

  <div>
   <h1>Assesment</h1>
   <PrettyRating rating={3.5} icons={icons.star} setColors={colors.star} />
  </div>

  <div>
   <h1>6.5/10 life points </h1>
   <PrettyRating
    rating={6.5}
    icons={icons.heart}
    setColors={colors.heart}
    iconsNumber={10}
   />
  </div>

  <div>
   <h1>Full life points </h1>
   <PrettyRating
    rating={10}
    icons={icons.heart}
    setColors={colors.heart}
    iconsNumber={10}
   />
  </div>
 </div>
);
```

## License

MIT (c) - Eduardo Álvarez
