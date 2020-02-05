//Syntax for callbacks

//This function uses another function to transform an Array
const map= function(array, transform){
  const copy=[];
  for (const element of array) {
    copy.push(transform(element));
  }
  return copy;
}

//function can be used as the transform
const square =function(x) {
  return x**2;
}

//Something to use as the original Array
const numbers= [1,2,3,4,5];

//use map
console.log(map(numbers, square));
console.log(numbers);

//Arrow function (wors the same as square)
console.log(map(numbers, x=> x**2));
console.log(map(numbers, x=> x + 2));

//in a different way
console.log(numbers.map(x=> x**2));
console.log(numbers.map(x=> x + 2));
