/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = (n) => {
  return n > 0 && ((n & (n - 1)) === 0);
};

// Ex. 1
console.log(
  isPowerOfTwo(1)
)

// Ex. 2
console.log(
  isPowerOfTwo(16)
)

// Ex. 3
console.log(
  isPowerOfTwo(3)
)
