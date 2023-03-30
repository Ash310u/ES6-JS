let colors = ['red','green','orange'];

colors.forEach(function(color){
	console.log(color); 
});



// create an array of numbers
let numbers = [1,2,3,4,5];

// create a veriable to hold the sum
let sum = 0;

// declared the function separately 
function adder(number) {
	sum += number;
}

// loop over the array, incrementing the sum veriable
// so a very common convention is if we have an array name , does somthong kind of like plural,like colors, numbers or computers or something like that for the inner function, the iterator function,  when we receive a individual element in the array, we'll use the singular form of the objects.  so colors become color, numbers becomes number , computers become computer and so on.
//////////just pass reference to the function
numbers.forEach(adder);

// print the sum variable  
console.log(sum);



var images = [
	{ height: 10, width: 30 },
	{ height: 20, width: 90 },
	{ height: 54, width: 32 }
  ];
  var areas = [];
  
//   using concat method for concatination of arrays
  images.forEach( function (image){
	let area =image.height * image.width ;
	areas = areas.concat( area );
})

console.log(areas);

  
	
  
  
	  