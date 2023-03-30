// using normally--------------------------------------------------------------->

function sum(numbers) {
    return numbers.reduce((sum, number) =>{ 
        return sum + number
    },0)
}
console.log(sum([1,2,3]));

console.log('----------------------------------------------------------------');

// using with REST OPERATOR---------------------------------------------------------------->

// I want to capture all of those arguments and put them into a single array. So this array of number ,that is the purpose of this "..." right here. it is what we refer to as the REST OPERATOR.
function sum2(...numbers) {
    return numbers.reduce((sum, number) =>{ 
        return sum + number
    },0)
}
// now you can pass only the numbers with a making an array , Soo my argument list here is going to have some unknown of arguments. 

console.log(sum2(1,2,3,4,5));


// uses of SPREAD OPERATOR---------------------------------------------------------------->

const blah_1 = [1,2,3];

let blah_2 = [4,5];

const blah_3 = [6,7,8,9];

console.log([...blah_1,...blah_2,...blah_3,10,11,12]);


// one example of REST & SPREAD OPERATOR---------------------------------------------------------------->

function validateListItem(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }
    return items
}

console.log(validateListItem('orange'));


// one more important example of REST & SPREAD OPERATOR---------------------------------------------------------------->

// its a practical use case when you have to create the same funtion with new name
const calculate = {
    cal(...rest) {
        console.log('please use this multiply method');
        return this.multiply(...rest);
    },
    multiply(a,b){
        return a * b ;
    }
}
console.log(calculate.cal(2,4));
console.log(calculate.multiply(4,4));