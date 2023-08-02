'use strict';

function BinarioADecimal(num) {
     
   
      var array = num.split("").reverse();
      var suma = 0;
    
      for (let i = 0; i < array.length; i++) {
        var numDecimal = parseInt(array[i]);
        suma = suma + numDecimal * 2 ** i;
      }
    
      return suma;
    }
   
    
function DecimalABinario(num) {
var numBinario = "";

while (num > 0){
   let residuo = num % 2
   numBinario = numBinario + residuo;
   num = Math.trunc(num / 2);
}
numBinario = numBinario.split("").reverse().join("");
return numBinario;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
