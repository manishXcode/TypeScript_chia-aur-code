// ------------------------------------ TYPESCRIPT FIRST FILE ------------------------------------

let a: number = 15;
let b: number = 13;
const add: number = a + b;
console.log(`Sum of a and b is: ${add}`);
console.log("Type of add is: ", typeof add);

const sub: number = a - b;
console.log("Reasult of a minus b is: ", sub);
console.log("Type of add is: ", typeof sub);

function multiplication(num1: number, num2: number): number {
  const multi: number = num1 * num2;
  return multi;
}

console.log("The multiplicatioin of two numbre: ",multiplication(5, 6))
