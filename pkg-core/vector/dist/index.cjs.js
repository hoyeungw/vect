'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Mapper = require('@vect/vector-mapper');
var Margin = require('@vect/vector-margin');
var Zipper = require('@vect/vector-zipper');

const {
  mapper,
  mutate
} = Mapper;
const {
  marginCopy,
  marginMapper,
  marginMutate
} = Margin;
const {
  zipper,
  mutazip,
  Duozipper,
  Trizipper,
  Quazipper
} = Zipper;

exports.Duozipper = Duozipper;
exports.Quazipper = Quazipper;
exports.Trizipper = Trizipper;
exports.mapper = mapper;
exports.marginCopy = marginCopy;
exports.marginMapper = marginMapper;
exports.marginMutate = marginMutate;
exports.mutate = mutate;
exports.mutazip = mutazip;
exports.zipper = zipper;
