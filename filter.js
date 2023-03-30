let products = [
    { name: 'head&solder', type: 'sampoo'},
    { name: 'loyreal', type: 'condisoner'},
    { name: 'dove', type: 'sampoo'},
    { name: 'thresme', type: 'condisoner'}
];

let grpCon= []

// using for loop--->
for (let i = 0; i < products.length; i++) {
        if (products[i].type === 'condisoner') {
            grpCon.push(products[i]);
        }
    
}
console.log(grpCon);


// using filter function--->
let filteredProducts = products.filter(function (product) {
    // dont forget to use return 
    return product.type === 'sampoo';
});
console.log(filteredProducts);


var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
   var filteredUsers = users.filter(function(user){
       return user.admin === true;
   })
   console.log(filteredUsers);