// next.config.js
/* eslint-disable */
const withTM = require('next-transpile-modules')(['@org/components']); // pass the modules you would like to see transpiled
const withSass = require('@zeit/next-sass');

module.exports = withTM(withSass());
