// Promise = new Promise((myresolve, myreject) => {
//     setTimeout(() => {
//         // myresolve();
//         myreject();
//     }, 4000);
// });
// Promise
//     // these "then" are callback functions
//     .then(() => console.log('because the promise is "resolve" after that "then" works'))
//     .then(() => console.log('we can use multiple "then"'))
//     .catch(() => console.log('because the promise is "reject" after that "catch" works'));


let url = 'https://jsonplaceholder.typicode.com/posts/'

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));