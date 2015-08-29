function truncate(str, num) {
  if(str.length > num){
  num_v = parseInt( num - 3);  
  str = str.slice(0, num_v);
  return str + "...";;
}else if(str.length < num || str.length != num){
  console.log('truncate fail');
}else{
  console.log('truncate fail');
}

}

truncate('A-tisket a-tasket A green and yellow basket', 11);