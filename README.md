# Chunk Array

[![CircleCI](https://img.shields.io/circleci/project/github/RedSparr0w/node-csgo-parser.svg?style=flat-square)](https://circleci.com/gh/mBourges/chunkArray.png?circle-token=38f56ca6786c4998ee1206c192616db1399cd6a6)
[![downloads](https://img.shields.io/npm/dm/starwars-names.svg?style=flat-square)](https://npm-stat.com/charts.html?package=chunkArray&from=2016-11-01)
[![MIT License](https://img.shields.io/npm/l/starwars-names.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Split an array in multiple arrays.

## Installation

This package is distributed via npm:

```
npm install chunkArray
```

## Usage

var arrays = chunkArray(array, depth);
array: the array to split.
depth: number of item new arrays should contain.


```javascript
const chunk = require('chunkArray');

const arrayToChunk = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
const chunkedArray = chunk(arrayToChunk, 4);

console.log(chunkedArray2); // returns [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16], [17]]
```