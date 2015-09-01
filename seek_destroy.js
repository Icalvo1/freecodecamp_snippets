function destroyer(arr) {
  arr_array = arguments[0];
  arr_arg = [];
  for(var i = 1; i < arguments.length; i++){
  arr_arg.push(arguments[i]);
  console.log(arr_arg);  
}
  function filtering(n) {
  console.log(n);	
  return(arr_arg.indexOf(n) === -1); // returns values of 1,3
}
  arr = arr_array.filter(filtering);
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Your thoughts are headed in the right direction, 
// but look at your filter function and think about what you're trying to do. 
// You've got an original array you're trying to filter, 
// your arr_arg array that holds your unwanted values, 
// and now you have to find these values using indexOf. 
// From there, you can remove them a couple of different ways... I'll leave those to you.