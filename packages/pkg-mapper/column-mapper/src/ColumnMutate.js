export function columnMutate (mx, fn, l) {
  l = l || mx && mx.length
  for (let i = 0, r, { y } = this; i < l && (r = mx[l]); i++)
    r[y] = fn(r[y], i)
  return mx
}

/**
 * Return a mutate function that iterate through each element in column indexed by 'y'.
 * @param {number} y
 * @returns {function(*[][],function(*):*,[number]):*[][]}
 * @constructor
 */
export const ColumnMutate = (y) => columnMutate.bind({ y })