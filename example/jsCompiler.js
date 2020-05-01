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

}());