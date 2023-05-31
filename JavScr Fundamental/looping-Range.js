//this function takes numbers from the console.log below and puts them to specific parrametre
let range = function(start, end, step) {
  //the array will keep the values from the works below
  let array = [];
  //if the parrameter is undefined it returns the value vack to the array
  if ((start === undefined) || (end === undefined) || (step === undefined)) {
    return array;
  // else if the start is greater than end it will return back the value to the array
  } else if (start > end) {
    return array;
  // the function will return the value into the array if it is zero or negative
  } else if (step <= 0) {
    return array;
  }
  // [i] is the array that will hold the value of the for loop
  // for loop is = to the parameters given from the console to the parameters
  // start will always be the same so it stays the same
  // if the value of [i] less than the end it will keep repeating the loop of step
  // step will keep adding the value it holds to [i]

  for (let i = start; i <= end; i += step) {

    // array.push will send the information collected in the for loop back to the array before the [for] loop

    array.push(i);
  }
  return array;
};



// this log will return the values that's been worked by the function
console.log(range(0, 4, 2));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));