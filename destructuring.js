const business = {
    type : 'service based',
    yearlyRevenue: '10 M$'
};

// ES5.5---------------------------------------------------------------------------------->
// var type = business.type;
// var yearlyRevenue = business.yearlyRevenue;

// console.log(type);
// console.log(yearlyRevenue);

console.log('----------------------------------------------------------------');

// ES6------------------------------------------------------------------------------------>

// normally with ES6-------------------->

// const { type } = business;
// const { yearlyRevenue } = business;

// console.log(type);
// console.log(yearlyRevenue);

// Detructuring with ES6---------------->

const { type, yearlyRevenue } = business;

console.log(type);
console.log(yearlyRevenue);

console.log('----------------------------------------------------------------')


// one more use case-------------------->

let savedFiled = {
    extention: 'jpg',
    size:144,
    name: 'ass'
}
// normally case--->
function fileManager(file) {
    return `name = ${file.name}, extention = ${file.extention}, size = ${file.size}kb`
}
console.log(fileManager(savedFiled));

console.log('----------------------------------------------------------------');

// destructuing use case--->
function fileStorage ({ name,extention,size },{ fuckup }){
    return `${fuckup}... come baby, name = ${name}, extention = ${extention}, size = ${size}kb`
}

console.log(fileStorage(savedFiled,{fuckup:"wanna try"}));

console.log('----------------------------------------------------------------');

// destructuring in arrays---------------------------------------------------------------------------------->

const companies= [
    'google',
    'facebook',
    'amazon'
]

// normally--->

// let name1 = companies[0]
// let name2= companies[1]
// let name3 = companies[2]

// destructuring Array----------------------------------------------->

const [anyname, anyname1, anyname2, anyname3] = companies;

console.log(anyname);
console.log(anyname1);
console.log(anyname2);
console.log(anyname3);

console.log('----------------------------------------------');
// we can use spread operator here----------------------------------->

const [ name, ...rest] = companies
const [...all] = companies

console.log(name);
console.log(rest);
console.log(all);


console.log('----------------------------------------------');

// we can pull off the length---------------------------------------->

const { length } = companies

console.log(length);

console.log('----------------------------------------------');

// destructuring arrays & objects together------------------------------------------------------------------------->

// use case 1
const companyDetails = [
    {name:'Google',ceo:'Sundar Pichai'},
    {name:'Apple',ceo:'Tim Cook'},
    {name:'FaceBook',ceo:'Mark Elliot Zuckerberg'}
]

// access with ceo name by destructuring--->
const [ { ceo } ] = companyDetails

console.log(ceo);

// use case 2
const Google = {
    founders:['Larry Page','Sergey Brin']
}

const {founders:[ anything,founder2 ]} = Google

console.log(anything);
console.log(founder2);

console.log('-----------------------------------------------');

// use case in function-------------------------------------------------------------------------------------------->

function signup({password,age,email,username,city}) {
    // using the destructuring we don't have to call the arguments one by one--->
    let nothing = `it is nothing ${password} ${email} ${username} ${city} ${age}`;
    console.log(nothing);
}

const user = {
    username:'ASS',
    age:10,
    email:'asshole@fucker.com',
    city:'yourAss',
    password:'fuckyou797'
}

signup(user)

console.log('------------------------------------------------------');

// last and very important use case------------------------------------------------------------------------------->

const randomNumbers = [
    [1,2],
    [3,4],
    [5,6],
    [7,8],
    [9,10]
]

// using for loop create {x:1,y:2} somthing like this--->

// for (let i = 0; i < randomNumbers.length; i++) {
//         let [x,y] = randomNumbers[i];
//         return {x,y}
//         console.log(x,y);
// }

// using destructuring--->

// it is but its has also a more shorter version->
const ass =  randomNumbers.map(rule =>{
    const [x,y] = rule;
    return{
        x:x,
        y:y
    }
})
console.log(ass);

// shortest version->
 const asshole = randomNumbers.map(([x,y]) => { return {x,y}})
 console.log(asshole);