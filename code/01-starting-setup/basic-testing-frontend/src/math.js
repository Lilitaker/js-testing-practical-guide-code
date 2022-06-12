export function add(numbers) {
   /* It has to be defined or we'll get a type error in the test */
  let sum = 0;

  for (const number of numbers) {
    //We add a plus before number to force the conversion
    sum += +number;
  }
  return sum;
}
