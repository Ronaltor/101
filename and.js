/**
 * @module 101/and
 */

/**
 * Functional version of &&
 * @function module:101/and
 * @param {*} a - any value
 * @param {*} b - any value
 * @return {boolean} a && b
 */
module.exports = and;

function and (a, b) {
  return a && b;
}