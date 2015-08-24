//Check if a string (first argument) ends with the given target string (second argument).
  //turn given string into an unsorted word array
  function str_to_array(str) {
array = str.match(/\S+\s*/g);
a_length = array.length;
for(var i = 0; i < a_length; i++) {
array[i] = array[i].trim();
}
return array;
}
  //check last array index and make a comparison with target string
  	//use conditional that checks if str and target are === or if target.length is === to last target.length of last array index
 function end(str, target) {
 	str_to_array(str);
 	last_arr_index = parseInt(array.length - 1);
 	len_arr_index = parseInt(array[last_arr_index].length);
 	tgt_len = parseInt(target.length);
 	substr_str_val = parseInt(last_arr_index - tgt_len);
 	tgt_chk = array[last_arr_index].substr(substr_str_val, len_arr_index);
  	if(array[last_arr_index] === target || target === tgt_chk){
  		return true;
  	}else{
  		return false;
  	}
}
end('Bastian', 'n');