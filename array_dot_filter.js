//code to filter out select elements out of array

var myArray = ['Sam','Mark','Tim','Sam']; //seed array

//array .filter method .filter(callbackfunction(value, index,array)  )
var result = myArray.filter(function(value, index, array){return array.indexOf(value) == index;});
//.filter will run 1x for every item in the array. return returns the current index through the loop.
   //if the loop finds an element value more then once it will check if the indexOf the first value found 
   //is == to the current index that the loop is on. 
   //if it is no then "the result failing the return conditional will be filtered out"
console.log(result);