import { FUN } from '@typen/enum-data-types';

const stat = function (vec, l) {
  var _l;

  l = (_l = l) !== null && _l !== void 0 ? _l : vec === null || vec === void 0 ? void 0 : vec.length;
  const {
    init,
    acc,
    to
  } = this;
  let i = 0,
      x = init ? init() : vec[i++];

  for (; i < l; i++) x = acc(x, vec[i], i);

  return to ? to(x, l) : x;
};
/**
 *
 * @param {Object|Function} config
 * @param {*|Function|function(*[],number?):*} [config.init] - create a container to hold statByInitVal
 * @param {Function|function(*,number?):*} [config.acc] - method to add current value to container when iterating
 * @param {Function|function(*,number?):*} [config.to] - method to to statByInitVal value from the container
 * @returns {Function|function(*[],number?):*}
 */

const Stat = (config = {}) => typeof config === FUN ? stat.bind({
  acc: config
}) : stat.bind(config);

export { Stat, stat };
