// For of loops------------------------------------------------------------------------------------->
// it's iterating through the arrays--->

let numbers = [1,2,3,4];

let total = 0;

for (let number of numbers) {
    console.log(number)
    total += number;
}
console.log('-------------------------------------------------------');

console.log(total);

console.log('-------------------------------------------------------');

// generator function syntax----------------------------------------------------------------------->

function* shopping() {

    const stuffFromStore = yield 'cash';

    const washingClothes = yield 'clothes';

    return [ washingClothes, stuffFromStore];
}

let gen = shopping();

// when first called gen,next() we started executing our code inside our generator function here until we got to the first yield statement. once we got to a yield statement, we yield a value
//  by calling gen.next() again we re-entered the generator function and change the value from yield statement and return.
console.log(gen.next());
console.log(gen.next('laundry'));
console.log(gen.next('groceries'));

console.log('-------------------------------------------------------');

// generator function uses with for of loop---------------------------------------------------->

function* colors() {
    yield 'red';
    yield 'green';
    yield 'blue';
}
const mycolors = [];

for (let color of colors()) {
    mycolors.push(color);
}
console.log(mycolors);

console.log('-------------------------------------------------------');

// A practical example of generator function----------------------------------------------------->

// here we are try take the names from the engineeringTeam object--->[ GENERATOR DELEGATION ]
const testingTeam = {
    lead:'Sup',
    tester:'sahil'
}

const engineeringTeam = {
    Size: 3,
    projectName:'kubernetes open sourse project',
    leader:'Ashu',
    coLeader:'Sanu',
    manager:'yunus',
    testingTeam
}

function* engineersiterator(team) {
    yield team.leader;
    yield team.coLeader;
    yield team.manager;
    // yield team.testingTeam.lead; // it would be a viable approach 
    const testersGenenrator = testersiterator(team.testingTeam);
    yield* testersGenenrator;
}

// but more reusable solution would be to crate a separate generator
function* testersiterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = []

for (const name of engineersiterator(engineeringTeam)) {
    names.push(name);
}
console.log(names);

console.log('-------------------------------------------------------');

// cleanup syntax---------------------------------------------------------------------------->

const testingTeam_1 = {
    lead:'Sup',
    tester:'sahil',
    // here the [Symbol.iterator] is a dynamically generated key
    [Symbol.iterator]: function* (){ // the purpose of [Symbol.iterator] is to teach a for of loop how it should iterate over this object.
        yield this.lead;
        yield this.tester;
        // If you want we could also put any other arbitrary values in here that we so choose.
        yield this;
        // or
        yield 'asshole';
        yield 5;
    }
}

const engineeringTeam_1 = {
    testingTeam_1,
    Size: 3,
    projectName:'kubernetes open sourse project',
    leader:'Ashu',
    coLeader:'Sanu',
    manager:'yunus',
    [Symbol.iterator]:function* (){
        yield this.leader;
        yield this.coLeader;
        yield this.manager;
        yield* this.testingTeam_1;
        // or
        yield "asshole2"
    }
}
const names_1 = []

for (const name of engineeringTeam_1) {
    names_1.push(name);
}
console.log(names_1);

console.log('-------------------------------------------------------');

// Generators with recursion & creating Trees---------------------------------------------------------------->

class comments {
    constructor(content, children){
        this.content = content;
        this.children = children;
    }
    * [Symbol.iterator]() {
         yield this.content;
         for (let child of this.children) {
            yield* child;
         }
    }
}

const children = [
    new comments('good comment',[]),
    new comments('bad comment',[]),
    new comments('nutral comment',[])
]

const tree = new comments('great post',children)

const values = [];

for (let value of tree) {
    values.push(value);
}
console.log(values);