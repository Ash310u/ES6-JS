let computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Asus', ram: 4 },
    { name: 'Acer', ram: 32 }
];

let AllComputersAreCapable = true;
let OnlySomeComputersAreCapable = false;

// using for loop
for (let i = 0; i < computers.length; i++) {
    let computer = computers[i];
    if (computer.ram > 16) {
        AllComputersAreCapable = false;
    } else {
        OnlySomeComputersAreCapable = true;
    }
}

// do these for checking

// console.log(AllComputersAreCapable);
// console.log(OnlySomeComputersAreCapable);

// using every helper 
let everyHelper = computers.every(function (computer) {
    return computer.ram > 16;

});
console.log(everyHelper);

// using some helper
let someHelper = computers.some(function (computer) {
    return computer.ram > 16;
});
console.log(someHelper);


// more uses of every and some helpers
function Field(value) {
    this.value = value
};

// validate check
Field.prototype.validate = function () {
    return this.value.length > 0;
}

// variables
let userName = new Field('Ashu');
let password = new Field('asshole');

// adding variables to the array
let fields = [userName, password];

// creating every helper
let Allchecked = fields.every(function (arg) {
    return arg.validate();
})

// create a message
if (Allchecked) {
    console.log("DONE");
} else {
    console.log("Error");
}