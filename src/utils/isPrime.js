export default (num) => {
  if (num % 2 === 0 && num > 2) return false; // even numbers

  // const s = Math.sqrt(num); // store the square to loop faster

  for (let i = 3; i <= num; i += 1) { // start from 3, stop at the square, increment
    if (num % i === 0) return false; // modulo shows a divisor was found
  }

  return true;
};
