// using normal function
const add = function(a,b){
    // it is a double js expression
    let sum = a + b
    return sum;
}

console.log(add(1,2));

// using fat arrow function---------------------------------------------------------------->

// whenever you have a single js expression then use FAT ARROW function--->

const newAdd = (a,b) => (a + b);
console.log(add(2,3));

// also we can do this--->

const newNewAdd = (a,b) => {
    let newSum = a * b;
    return newSum;
}

console.log(newNewAdd(4,4));

// also the simplest from oa FAT ARROW function is 

const double = number => 2 * number;
console.log(double(3)) 

// double all numbers in an array using FAT ARROW with MAP

let arr = [1,2,3,4];

console.log(arr.map(number => number *2));

// main uses of FAT ARROW with MAP------------------------------------------------>

// using function normally--->

const team_1 = {
    members: ["ashu","sanu"],
    teamName: "Billionaire",
    teamSummary: function () {
        let callThis = this
        return this.members.map(function (member) {
            return `${member} is a ${callThis.teamName}`; 
        });
    }
}
console.log(team_1.teamSummary());

// using FAT ARROW --->

const team_2 = {
    members: ["ashu","sanu"],
    teamName: "Multi Billionaire",
    teamSummary: function () {
        // this === team; when we use FAT ARROW in this kind of function
        return this.members.map(member => {
            return `${member} is a ${this.teamName}`; 
        });
    }
}
console.log(team_2.teamSummary());