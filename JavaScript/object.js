//object and array syntax

//object literal
const point = {x:1, y:2};
console.log(point);

console.log(point.x);

//change object properties
point.x = 3;

//nested object literal
const circle = {
    center: point,
    radius: 4
};

//access subproperties
console.log(circle.center.x);
console.log(circle.color);
circle.color = 'blue';
console.log(circle);

// Array
const languages = ['HTML', 'CSS', 'JS']
console.log(languages);

//acessing length and elements
for (let i=0; i < languages.length; i++){
  console.log(languages[i]);
}

//changing elements
languages[2]= 'javascript';

//adding elements
languages.push('MongoDB');

//iterating over elements
for (const lang of languages){
  console.log(lang);
}

//function syntax

//function definition
const avg= function(a,b) {
  return (a+b) / 2;
};

//function call
console.log(avg(5, 6));

//Another definition
const print = function(a, b) {
  console.log(` a=${a}, b=${b}`);
}

//undefined values
const result = print(7,8);
console.log(result);
print(9);
print();
