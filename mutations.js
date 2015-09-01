//if the string in the first element of the array contains all of the letters of the string in the second element of the array.
    //Return true 

function mutation(arr) { //function that takes an array of ['two','words'] as parameters
    var str1 = arr[0].toLowerCase(); //takes index value [0] in arr and converts it to lowercase ie: ['ABC'] --> ['abc']
    var str2 = arr[1].toLowerCase().split(''); //takes index value [1] and converts it to lowercase then creates an array of the letters making up the original string
    for(var i = 0; i< str2.length; i++){ //loops through arr looking for false values
      if(str1.indexOf(str2[i]) === -1){ //if any values from str1 are not found in str2, then function will return false
          return false; //return value if str1 values are not found in str2
      }
    }return true;
  
  return arr;
}
mutation(['hello', 'hey']);


//solution:


// function mutation(arr) {
//     var one = arr[0].toLowerCase();
//     var two = arr[1].toLowerCase().split('');
//     for(x=0; x<two.length; x++) {
//         if(one.indexOf(two[x]) === -1) {
//             return false;
//         }
//     } return true;
// }
// mutation(['hello', 'hey'])