let numbers = [1,2,3,4,5];

let doubled = [];

// using for loop
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i]*2);
}
console.log(doubled);

// usig map helper
let triNumber = numbers.map(function (number) {
    // if you don't retrun a value from the inner function, Map will just think that you are retruning undefined.
   return number * 3;
})
console.log(triNumber);

// uses
let cars = [
    {model:'Sedan', cost:'expensive'},
    {model:'S class', cost:'more expensive'}
];

let costs = cars.map(function (car) {
    return car.cost
});
console.log(costs);

