// using with  Enhanced Object Literals------------------------>
function createBookShop(inventory) {
    return {
        // whenever we make reference to a key and a value with the exact same name then do this
        // inventory: inventory, instead of you can do this
        inventory,
        // if we have a key value pair where the value is a function, we can omit both the colon and the function keyword
        // inventoryValue: function () {}, instead of you can do this
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        // priceForTitle: function (title) {}, instead of you can do this
        priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
        }

    }
}

const realInventory = [
    { title: 'Harry Potter', price: 15 },
    { title: 'Atomic Habits', price: 20 },
    { title: 'Sapiens', price: 10 },
    { title: 'Ikigai', price: 5 }
]

const bookShop = createBookShop(realInventory);

console.log(bookShop.inventory);
console.log(bookShop.inventoryValue());
console.log(bookShop.priceForTitle('Ikigai'));





// one more example ------------------------------>

// function saveFile(url,data) {
//     $.ajax({
//         // with Enhanced Object Luterals--->
//         // url: url 
//         url,
//         // data: data
//         data,
//         method: 'POST',
//     });
// };

// const url = 'http://google.com';
// const data = {color:'red'};

// console.log(saveFile(url, data));




