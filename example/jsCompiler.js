/*jshint esversion: 6 */
(function () {
    "use strict";
    let animal = {
        eat: true,
        giveMeat() {
            return "Yes he gives meat!";
        },
        location(home){
            return home;
        },
        checking(){
            //something here
        }
    };

    let cow = {
        run: "Sometimes!",
        __proto__: animal
    };

    let anotheOb = {
      testB: "working!",
      __proto__: cow
    };

    console.log(cow);

    for(let lp in cow){  console.log(cow);}


    //cow.__proto__ = animal;
    console.log(cow.eat);
    console.log(cow.run);
    console.log(cow.giveMeat());
    console.log(cow.location("In his home!"));
    console.log("Calling from animal: " + anotheOb.eat);

    cow.checking = function () {
        console.log("Bro this working in cow!");
    };
    cow.checking();

    //1 Working prototype
    let janybar = {
        jumps: null
    };

    let at = {
        __proto__: janybar,
        jumps: true
    };

   // alert(at.jumps);  //true
    delete  at.jumps;

   // alert(at.jumps);
    delete janybar.jumps;    //null
    //alert(at.jumps);        //undefined

    //2
    let head = {
        glasses: 1
    };

    let table = {
        pen: 3,
        __proto__: head
    };

    let bed = {
        sheet: 1,
        pillow: 2,
        __proto__: table
    };

    let pockets = {
        money: 2000,
        __proto__:bed
    };

    console.log(pockets.pen);   //3
    console.log(bed.glasses);   //1

    //3
    let animal2 = {
        eat() {
            this.full = true;
        }
    };

    let rabbit = {
        __proto__: animal2
    };

    rabbit.eat();


    //4
    let hamster = {
        stomach: [],

        eat(food) {
            this.stomach.push(food);
        }
    };

    let speedy = {
        __proto__: hamster,
        stomach: []
    };

    let lazy = {
        __proto__: hamster,
        stomach: []
    };

// Speedy one found the food
    speedy.eat("apple");
   // alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
   // alert( lazy.stomach ); // <nothing>

    //2222

    function Robbit(name){
        this.name = name;
        alert(name);
    }

    let ob1 = new Robbit("Hon");
    let ob2 = new Robbit("Segaa");

    function x() {
        var x = 20;
        var f = (function() {
            var x = 30;
            return  function(){
                alert(x);
            };
        } )();
        return f;
    }

    var y = x();

    console.log(y);




}());