//1)
//1
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c){
    console.log("First: " + x);
    console.log("Secpnd: "+ a);
    var f = function(a, b, c){
        b = a;
        console.log("Three: "+ b);
        b = c;
        var x = 5;
    }
    f(a,b,c);
    console.log("Four: " + b);
    var x = 10;
}
c(8,9,10);
console.log("Five: " + b);
console.log("Six: " + x);




//2)




//3)



//1
/* x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c){
console.log("First: " + x);
console.log("Secpnd: "+ a);
var f = function(a, b, c){
b = a;
console.log("Three: "+ b);
b = c;
var x = 5;
}
f(a,b,c);
console.log("Four: " + b);
var x = 10;
}
c(8,9,10);
console.log("Five: " + b);
console.log("Six: " + x); */

//4
 var x = 9;
function myfunc(){
return x * x;
}
document.writeln(myfunc());
x = 5;
document.writeln(myfunc());

//5
 var foo = 1;
function myfunc(){
if(!foo){
var foo = 10;
}
alert(foo);
}
foo();

//6
var countObject = (function(){
    var counter = 0;

    function add(){
        counter += 1;
    };
    function reset(){
        counter = 0;
    };
    return {
        add: add,
        reset: reset,
        counter:function(){
            return counter;
        }
    };

})();

countObject.add();
console.log("Res add: " + countObject.add());
countObject.reset();
console.log("Res reset: " + countObject.reset());

//8
const make_adder = function(val){
    let counter = 0;
    return function(){
        counter += val;
        console.log(counter);
    };
};

const add5 = make_adder(5);
add5(); add5(); add5();
const add7 = make_adder(7);
add7(); add7(); add7();


//11
employee.adress= "";
employee.getAdress = function(){
    return employee.adress;
}

employee.setAdress= function(newAdress){
    employee.adress = newAdress;
}

employee.setAdress("Texas");
console.log("My adress: " + employee.getAdress());






