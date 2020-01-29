let total=0;
let count=1;
while (count <= 10){
  total += count**2;
  count += 1
}
console.log(total);

let fib1=1;
let fib2=1;
let fibtotal=0;
let temp1=0
while (fibtotal<1000){
  temp1=fibtotal;
  fibtotal=fib1+fib2;
  fib1=fib2;
  fib2=temp1;
}
console.log(fibtotal);

let count2=0;
while (count<=100){
  if (count % 3 === 0 && count % 5 !== 0){
    console.log(count2);
  }
  if (count % 5 === 0 && count % 3 !== 0){
    console.log(count2);
  }
  count+=1;
}
