'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vectorZipper = require('@vect/vector-zipper');
var vectorMapper = require('@vect/vector-mapper');

const draft = size => Array(size).fill([,,]);
const wind = (keys, values) => vectorZipper.zipper(keys, values, (k, v) => [k, v]);
/**
 * Shallow.
 * @param {string[]} keys
 * @param {*} value
 * @return {Object<string,*>}
 */

const iso = (keys, value) => vectorMapper.mapper(keys, key => [key, value]);

exports.draft = draft;
exports.iso = iso;
exports.wind = wind;
