//Function that takes a string converts it into array of words & strips off the whitespace from both sides of the words.
function str_to_array(str) {
array = str.match(/\S+\s*/g);
a_length = array.length;
for(var i = 0; i < a_length; i++) {
array[i] = array[i].trim();
}
return array;
}