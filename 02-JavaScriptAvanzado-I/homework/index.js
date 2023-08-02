x = 1;
var a = 5;
var b = 10;
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10
   console.log(a); // 8
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9
};
c(8, 9, 10);
console.log(b); // 10
console.log(x); // 1

console.log(bar); // undefined
//console.log(baz); // error
foo();
function foo() {
   console.log('Hola!'); // Hola! 
}
var bar = 1;
baz = 2;

//javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor); // Franco 

//javascript
var instructor = 'Tony';
console.log(instructor); // Tony
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //Franco
   }
})();
console.log(instructor); // Tony

//javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash';
   let pm = 'Reverse Flash';
   console.log(instructor); // The Flash
   console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm);// Franco

console.log(6 / "3") // 2
console.log("2" * "3") // 6
console.log(4 + 5 + "px") // 9px
console.log("$" + 4 + 5) // $45
console.log("4" - 2) // 2
console.log("4px" - 2) // NaN
console.log(7 / 0) // Infinito
console.log({}[0]) // undefined
console.log(parseInt("09")) // 9
console.log(5 && 2) // 2
console.log(2 && 5) // 5
console.log(5 || 0) // 5
console.log(0 || 5) // 5
console.log([3]+[3]-[10]) // 23
console.log(3>2>1) // false
console.log([] == ![]) // true

function test() {
    console.log(a); // undefined
    console.log(foo()); // 2
 
    var a = 1;
    function foo() {
       return 2;
    }
 }
 
 test();
