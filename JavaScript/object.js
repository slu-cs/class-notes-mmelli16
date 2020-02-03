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
