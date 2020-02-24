import { Columns } from '@vect/column-getter';

const size = mx => {
  let h, r;
  return mx && (h = mx.length) && (r = mx[0]) ? [h, r.length] : [h, r];
};

const iterate = function (mx, fnOnColumns) {
  const [h, w] = size(mx);

  for (let y = 0, cols = Columns(mx); y < w; y++) fnOnColumns.call(this, cols(y, h), y);
};

const mapper = (mx, mapOnColumns) => {
  const [h, w] = size(mx),
        tcol = Array(w);

  for (let y = 0, cols = Columns(mx); y < w; y++) tcol[y] = mapOnColumns(cols(y, h), y);

  return tcol;
};

export { iterate, mapper };
