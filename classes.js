// using prototype---------------------------------------------------------------->
function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function(aur){
    return `this is ${aur} Vroooom Vrooom`
}

const car = new Car({title: 'nothing'})

console.log(car.drive('Bugaati'))

console.log(car);

console.log('--------------------------------');

// extend Car function in Ford constructor function suing PROTOTYPE--->

function Ford(options) {
    Car.call(this, options),
    this.color = options.color
}

Ford.prototype = Object.create(Car.prototype);
Ford.prototype.constructor =Ford;

Ford.prototype.honk= function (){
    return 'beep'
}

const ford = new Ford({color:'red',title:'somthing'});

console.log(ford);

console.log(ford.drive('Frod Mustang'));
console.log(ford.honk());

console.log('--------------------------------');

// it is little bit equivalent to what we've just before using CLASS---------------------------------------------------------------->

class newCar {
    constructor({title,aur}){
        this.title = title,
        this.aur = aur;
    }
    // whenever you are adding method inside of the class, you don't need to separate the methods with a comma
    drive(){
        return `its vroooom asshole`;
    }
}

const newcar = new newCar({title:'its new',aur:'whats up'})

console.log(newcar);
console.log(newcar.drive());

console.log('--------------------------------');

// extend newCar class in Ford class--->

// just using two words extends newCar we can extends the method of newCar--->
class newFord extends newCar {
    // i can destructure 'options' to {color, title, aur } and use
    constructor(options){
        // Whenever we have a subclass like newFord that wants to call a method on the parent when that same method is declared on both sides we refer to the "SUPER" keyword--->
        super(options);//newCar.constructor()
        // whenever you call a super method especially in the constructor you need to make sure that you also pass along any options that were provided in the constructor.
        this.color = options.color
    }
    honk(){
        return "its beep beep asshole";
    }
}

const newford = new newFord({title:'ford',color:'Black',aur:'nothing whats up'})

console.log(newford);
console.log(newford.honk());
console.log(newford.drive());

console.log('--------------------------------');

// example------------------------------------------------------------------------->
class Monster {
    constructor(options) {
      this.health = 100;
      this.name = options.name;
    }
  }
  
  class Snake extends Monster{
      constructor(options){
          super(options);
      }
      bite(snake){
          return snake.health -= 10 
      }
  }
  const snake1 = new Snake({ name: 'Fred' });
  const snake2 = new Snake({ name: 'Willy' });
  snake1.bite(snake2);
  console.log(snake1);
  console.log(snake2);