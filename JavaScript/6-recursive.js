'use strict';

const compose = (...fns) => (...args) => {
  if (fns.length === 0) return args[0];
  const fn = fns.shift();
  const res = fn(...args);
  if (fns.length === 0) return res;
  return compose(...fns)(res);
};

// Usage

const upperCapital = s => s.replace(
  /\w+/g,
  word => word.charAt(0).toUpperCase() + word.substr(1)
);

const lower = s => (typeof s === 'string' ? s.toLowerCase() : '');

const trim = s => s.trim();

const s = '   MARCUS AURELIUS   ';
console.log(s);
console.log('lower(' + s + ') = ' + lower(s));
console.log('upperCapital(' + s + ') = ' + upperCapital(s));

const capitalize = compose(trim, lower, upperCapital);
console.log('capitalize(' + s + ') = ' + capitalize(s));