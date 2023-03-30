// // normal type
// function makeAjaxRequest(url, method) {
//     if (!method) {
//         method = 'GET';
//     }
//     return method
// }

// using Default Function Arguments--->
function makeAjaxRequest(url, method = 'GET') {
    return method;
}

console.log(makeAjaxRequest('google.com'))
console.log(makeAjaxRequest('google.com',NaN))
console.log(makeAjaxRequest('google.com',null))
console.log(makeAjaxRequest('google.com',undefined))
console.log(makeAjaxRequest('google.com','POST'))

// one more example--------------------------------------------->

function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() *1000000000000;
}

function createAdminUser(user = new User(generateId())) {
    user.admin = true;
    return user
}
// normal type--->
// console.log(createAdminUser(new User(generateId())));

// using Default Function Arguments--->
console.log(createAdminUser())