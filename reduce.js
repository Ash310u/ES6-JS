let number_1 = [1,2,3,4,5];

let sum = 0;


// using for loop 
for (let i = 0; i < number_1.length; i++) {
    sum += number_1[i];
    console.log(sum);
}
console.log("--------------------------------");

console.log(sum);

console.log("--------------------------------");

// using reduce helper like for each
let number_2 = [1,2,3,4,5,6,7,8,9,10];

let sumAgain = number_2.reduce(function(total, number){
    return total + number ; 
},0);

console.log(sumAgain);

// using reduce helper like map
let colors =[
    {color:'red'},
    {color:'blue'},
    {color:'yellow'}
]

let arrayColors = colors.reduce(function(previous, primaryColor){
        previous.push(primaryColor.color);
        return previous;
},[])

console.log(arrayColors);


// reduce helper interview questions

function blanacedParens(string) {
    return !string.split("").reduce(function (previous, char){
        if (previous < 0) { return previous}
        if (char === "(") { return ++previous}
        if (char === ")") { return --previous}
        return previous;
    },0)
}

console.log(blanacedParens(")"));