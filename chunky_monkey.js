//Write a function that splits an array (first argument) into groups the length of size (second argument)
    //returns them as a multidimensional array.

function chunk(arr, size) {
	var new_arr = [], i, k;
	for (i = 0, k = -1; i < arr.length; i++){
		if (i % size === 0) {
			k++;
			new_arr[k] = [];
		}
	    new_arr[k].push(arr[i]);	
	}
	return new_arr;
	}

chunk(['a', 'b', 'c', 'd'], 2);
