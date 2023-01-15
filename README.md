<div id="top">
  <h1>pretty-rating-react
   <img src="https://cdn.iconscout.com/icon/free/png-256/typescript-1174965.png" width="25" height="25" />
 </h1>

 <p>A small and simple library that transform you rating in icons for you web</p>
</div>

![Pretty rating React](https://imgur.com/Pd1vf7k.png 'How to see pretty-rating-react')

## Status

[![Coveralls Status](https://img.shields.io/coverallsCoverage/github/Proskynete/pretty-rating-react?logo=Coveralls)](https://coveralls.io/github/Proskynete/pretty-rating-react?branch=master) [![CI](https://img.shields.io/github/actions/workflow/status/Proskynete/pretty-rating-react/ci.yml?logo=GithubActions&logoColor=fff)](https://github.com/Proskynete/pretty-rating-react/actions/workflows/ci.yml) [![npm version](https://img.shields.io/npm/v/pretty-rating-react?logo=Npm&logoColor=fff)](https://www.npmjs.com/package/pretty-rating-react) [![bundlephobia](https://img.shields.io/bundlephobia/min/pretty-rating-react)](https://bundlephobia.com/package/pretty-rating-react) [![downloads](https://img.shields.io/npm/dm/pretty-rating-react)](https://www.npmjs.com/package/pretty-rating-react) [![GitHub license](https://img.shields.io/github/license/Proskynete/pretty-rating-react?logo=Github)](https://github.com/Proskynete/pretty-rating-react)
[![GitHub issues](https://img.shields.io/github/issues/Proskynete/pretty-rating-react)](https://github.com/Proskynete/pretty-rating-react/issues) [![GitHub forks](https://img.shields.io/github/forks/Proskynete/pretty-rating-react)](https://github.com/Proskynete/pretty-rating-react/network) [![GitHub stars](https://img.shields.io/github/stars/Proskynete/pretty-rating-react)](https://github.com/Proskynete/pretty-rating-react/stargazers) [![Package Quality](https://packagequality.com/shield/pretty-rating-react.svg)](https://packagequality.com/#?package=pretty-rating-react) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-green)](#CONTRIBUTING.md)

<br />
<br />

<details>
  <summary>Table of contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting started</a>
    </li>
    <li>
      <a href="#api-documentation">API Documentation</a>
      <ul>
        <li><a href="#pretty-rating">PrettyRating</a></li>
      </ul>
    </li>
    <li><a href="#how-to-use">How to use it</a></li>
  </ol>
</details>

<h2 id="getting-started">Getting started</h2>
To install as npm dependency

```sh
npm install --save pretty-rating-react@latest
```

<p align="right"><a href="#top">🔝</a></p>

<h2 id="api-documentation">API Documentation</h2>

<h3 id="pretty-rating">PrettyRating</h3>

This is the wrapper component that creates the pretty format of our rating.

| Name     | Type     | Required | Default value                                                            | Values Allowed                                 | Description                                                                                                                                  |
| -------- | -------- | -------- | ------------------------------------------------------------------------ | ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| value    | number   | `true`   | -                                                                        | positive integers or floats                    | Rating that we will transform to icons.                                                                                                      |
| icons    | object   | `false`  | `complete` and `empty` with **faStar** and `half` with **faStarHalfAlt** | each keys allow string or FontAwesome´s icon   | Object with 3 states: complete when the rating number is integer, half when it is floating and empty to fill if it is missing for the total. |
| max      | number   | `false`  | `5`                                                                      | positive integers                              | Number of icons to create.                                                                                                                   |
| colors   | array    | `false`  | ["#000", "#000", "#000"]                                                 | `hexadecimal` - `RGB` - `HSLA` - `Color Names` | Colors with which icons are rendered.                                                                                                        |
| disabled | boolean  | `false`  | `false`                                                                  | `true` or `false` values                       | If the value of the prop is true, the component will not be clickable                                                                        |
| onChange | function | `false`  | `undefined`                                                              | only functions                                 | With this function you can get the new selected value                                                                                        |

The `max` prop determines the number of icons to render, it's related to `value`. So, if the`max` is 5, the rating must be from 0 to 5.
The indexes of array of `colors` prop represent the color to icons to render. colors[0] is for the`complete` icons, colors[1] is for the `half` icons and colors[2] is for the `empty` icons.

> The `value` prop is rounded down. For example, if the value is 3.3, it will round up to 3.0. If the value is 3.8, it will round up to 3.5.

<p align="right"><a href="#top">🔝</a></p>

<h2 id="how-to-use">How to use it</h2>

The following snippet will show you how to use the library: (Example with icons of [FontAwesome](https://fontawesome.com/how-to-use/on-the-web/using-with/react))

**Using function components (_without Typescript_):**

```js
import React from 'react';
import PrettyRating from 'pretty-rating-react';
import { faHeart, faStar, faHeartBroken, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const icons = {
 star: {
  complete: faStar,
  half: faStarHalfAlt,
  empty: farStar,
 },
};

const colors = {
 star: ['#d9ad26', '#d9ad26', '#434b4d'],
};

const Main = () => {
 return (
  <>
   <h1>Assessment</h1>
   <PrettyRating
    value={5}
    icons={icons.star}
    colors={colors.star}
    onChange={(newValue) => {
     console.log('new value: ', newValue);
     ...
    }}
   />
  </>
 );
};
```

**Using function components (_with Typescript_):**

```js
import React from 'react';
import PrettyRating, { IconsInterface } from 'pretty-rating-react';
import { faHeart, faHeartBroken, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart, faStar as farStar } from '@fortawesome/free-regular-svg-icons';

interface CustomIconsInterface {
 heart: IconsInterface;
}

const icons: CustomIconsInterface = {
 heart: {
  complete: faHeart,
  half: faHeartBroken,
  empty: farHeart,
 },
};

const colors = {
 heart: ['#9b111e', '#a83f39'],
};

const Main = () => (
 <>
  <h1>Life Points</h1>
  <PrettyRating
   value={10}
   icons={icons.heart}
   colors={colors.heart}
   max={10}
   onChange={(newValue: number) => {
    console.log('new value: ', newValue);
    ...
   }}
  />
 </>
);
```

<p align="right"><a href="#top">🔝</a></p>

<h2 id="license">License</h2>

Code and documentation copyright 2020–2023 the [Pretty Ratting React Authors](https://github.com/Proskynete/pretty-rating-react/graphs/contributors) and [Me](https://github.com/Proskynete/Proskynete). Code released under the [MIT License](https://github.com/Proskynete/pretty-rating-react/blob/master/LICENSE).

<p align="right"><a href="#top">🔝</a></p>
