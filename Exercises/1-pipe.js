'use strict';

const pipe = (...fns) => x => {
  if (fns.length === 0) return x;
  let res = x;
  for (const fn of fns) {
    if (typeof fn !== 'function') throw new Error('Wrong parameter.');
    res = fn(res);
  }
  return res;
};

module.exports = { pipe };
