# Pretty rating React

A small and simple library that transform you rating in icons for tu web

![Pretty rating React](https://imgur.com/U0WgQID.png 'How to see pretty-rating-react')

## Status

[![Coverage Status](https://coveralls.io/repos/github/Proskynete/pretty-rating-react/badge.svg?branch=master)](https://coveralls.io/github/Proskynete/pretty-rating-react?branch=master) ![Version](https://img.shields.io/npm/v/pretty-rating-react.svg) [![Build Status](https://travis-ci.org/Proskynete/pretty-rating-react.svg?branch=master)](https://travis-ci.org/Proskynete/pretty-rating-react) [![dependencies Status](https://david-dm.org/proskynete/pretty-rating-react/status.svg)](https://david-dm.org/proskynete/pretty-rating-react) [![devDependencies Status](https://david-dm.org/proskynete/pretty-rating-react/dev-status.svg)](https://david-dm.org/proskynete/pretty-rating-react?type=dev) [![peerDependencies Status](https://david-dm.org/proskynete/pretty-rating-react/peer-status.svg)](https://david-dm.org/proskynete/pretty-rating-react?type=peer)

## Getting started

To install as npm dev dependency

```sh
npm install pretty-rating-react --save-dev
```

Or if you preferred, you can use `yarn`

```sh
yarn add pretty-rating-react --dev
```

## API Documentation

### PrettyRating

This is the wrapper component that creates the pretty format of our rating.

| Name        | Type   | Required | Default | Values Allowed                                           | Description                            |
| ----------- | ------ | -------- | ------- | -------------------------------------------------------- | -------------------------------------- |
| rating      | number | true     | -       | positive floats or integers numbers                      | rating that we will transform to icons |
| icons       | object | true     | -       | this object receive 3 attributes (complete, half, empty) | class names foreach elements           |
| iconsNumber | number | false    | 5       | positive integers numbers                                | number of icons to create              |

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
			complete: 'fas fa-star',
			half: 'fas fa-star-half-alt',
			empty: 'far fa-star',
		};

		return (
			<>
				<div>
					<h3>Title</h3>
					<PrettyRating rating={3.0} icons={icons} />
				</div>
				<div>
					<h3>Title</h3>
					<PrettyRating rating={5.0} icons={icons} />
				</div>
				<div>
					<h3>Title</h3>
					<PrettyRating rating={6.5} icons={icons} iconsNumber={10} />
				</div>
				<div>
					<h3>Title</h3>
					<PrettyRating rating={8.5} icons={icons} iconsNumber={10} />
				</div>
			</>
		);
	}
}
```

**_Using function components:_**

```js
import React from 'react';
import PrettyRating from 'pretty-rating-react';

const icons = {
	complete: 'fas fa-star',
	half: 'fas fa-star-half-alt',
	empty: 'far fa-star',
};

const Main = () => (
	<>
		<div>
			<h3>Title</h3>
			<PrettyRating rating={3.0} icons={icons} />
		</div>
		<div>
			<h3>Title</h3>
			<PrettyRating rating={5.0} icons={icons} />
		</div>
		<div>
			<h3>Title</h3>
			<PrettyRating rating={6.5} icons={icons} iconsNumber={10} />
		</div>
		<div>
			<h3>Title</h3>
			<PrettyRating rating={8.5} icons={icons} iconsNumber={10} />
		</div>
	</>
);
```

## License

MIT
