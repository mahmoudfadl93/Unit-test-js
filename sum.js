const theSum = (...numbers) =>
  numbers.reduce((prev, current) => prev + current, 0);
module.exports = theSum;
