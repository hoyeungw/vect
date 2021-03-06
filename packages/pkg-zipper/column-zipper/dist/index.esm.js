import { draft } from '@vect/matrix-init';

function duozipper(ma, mb) {
  let {
    y,
    fn,
    mx,
    t,
    b
  } = this;
  t = t || 0, b = b || (ma === null || ma === void 0 ? void 0 : ma.length), mx = mx || draft(b, y);

  for (let i = t; i < b; i++) mx[i][y] = fn(ma[i][y], mb[i][y], i);

  return mx;
}
function trizipper(ma, mb, mc) {
  let {
    y,
    fn,
    mx,
    t,
    b
  } = this;
  t = t || 0, b = b || (ma === null || ma === void 0 ? void 0 : ma.length), mx = mx || draft(b, y);

  for (let i = t; i < b; i++) mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], i);

  return mx;
}
function quazipper(ma, mb, mc, md) {
  let {
    y,
    fn,
    mx,
    t,
    b
  } = this;
  t = t || 0, b = b || (ma === null || ma === void 0 ? void 0 : ma.length), mx = mx || draft(b, y);

  for (let i = t; i < b; i++) mx[i][y] = fn(ma[i][y], mb[i][y], mc[i][y], md[i][y], i);

  return mx;
}
const Duozipper = (y, fn, {
  mx,
  t,
  b
} = {}) => duozipper.bind({
  y,
  fn,
  mx,
  t,
  b
});
const Trizipper = (y, fn, {
  mx,
  t,
  b
} = {}) => trizipper.bind({
  y,
  fn,
  mx,
  t,
  b
});
const Quazipper = (y, fn, {
  mx,
  t,
  b
} = {}) => quazipper.bind({
  y,
  fn,
  mx,
  t,
  b
});

const zipper = (ma, mb, y, fn, l) => duozipper.call({
  y,
  fn,
  b: l
}, ma, mb);

const mutazip = (ma, mb, y, fn, l) => duozipper.call({
  y,
  fn,
  mx: ma,
  b: l
}, ma, mb);

const ColumnZipper = y => (ma, mb, fn, l) => duozipper.call({
  y,
  fn,
  b: l
}, ma, mb);

const ColumnMutazip = y => (ma, mb, fn, l) => duozipper.call({
  y,
  fn,
  mx: ma,
  b: l
}, ma, mb);

export { ColumnMutazip, ColumnZipper, Duozipper, Quazipper, Trizipper, mutazip, zipper };
