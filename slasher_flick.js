//Return the remaining elements of an array after chopping off n elements from the head.
function slasher(arr, howMany) {
  for(var i = 0; i < arr.length; i++){
    arr = arr.splice(howMany);
}
  return arr;
}

slasher([1, 2, 3], 2);
