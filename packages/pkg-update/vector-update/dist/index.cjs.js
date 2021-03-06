'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var swap = require('@vect/swap');

const partition = (vec, indexes, hi) => {
  hi = hi || indexes.length;
  let i = 0,
      cu = indexes[0],
      nx;
  const insertion = swap.insertDown.bind(vec);

  while (++i < hi) if ((nx = indexes[i]) !== ++cu) insertion(nx, cu);

  return vec;
};

/**
 *
 * @param {*[]} vec
 * @param {number[]} indexes - integer array sorted ascending
 * @param {number} [hi] - length of indexes
 * @returns {*[]} - altered of original array
 */

const splices = (vec, indexes, hi) => {
  var _hi;

  return hi = (_hi = hi) !== null && _hi !== void 0 ? _hi : indexes === null || indexes === void 0 ? void 0 : indexes.length, partition(vec, indexes, hi).splice(indexes[0], hi), vec;
};

exports.partition = partition;
exports.splices = splices;
