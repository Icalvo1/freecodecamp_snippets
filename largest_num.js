newArr = [];
//function that pulls arr[i][0] and saves it into final answer array
function post_sort(arr) {
	for(var i =0; i <arr.length; i++){
		newArr.push(arr[i][0]);
	}
}
//function that sorts values of a 1 or 2 dimensional array in descending order
function desc_sort(arr) {
  	for(var i = 0; i < arr.length; i++) {
	arr[i].sort(function(a,b) {
	return b-a;
		});
	}
}
//Returns an array consisting of the largest number from each provided sub-array.
function largestOfFour(arr){
	desc_sort(arr);
	post_sort(arr);
	return newArr;
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);


