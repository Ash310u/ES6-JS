let users = [
    {name: 'John'},
    {name: 'George'},
    {name: 'Alex'}
]
let user;

// using for loop
for (let i = 0; i < users.length; i++) {
    if(users[i].name === 'Alex'){
        user = users[i];
    }
}
console.log(user);


// using find helper 
let username = users.find(function(arg){
    return arg.name === "George"
});
console.log(username);


// little bit hard
function Car(model) {
    this.model = model;
}
let cars = [
    new Car('Bugati'),
    new Car('RR'),
    new Car('Lambo')
]
let carName = cars.find(function(arg){
    return arg.model === 'RR';
});
console.log(carName);

