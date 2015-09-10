//Make a function that looks through an array of objects (first argument) 
//and returns an array of all objects that have matching property and value pairs (second argument)
function where(collection, source) { //collection is the seed array & source is the search parameters

  var srcKeys = Object.keys(source);  // srcKeys uses .keys function to select all keys in source storing them in srcKeys


  return collection.filter(function (obj) { //collection then uses .filter to filter out un-matching objects using callback function
    for(var i = 0; i < srcKeys.length; i++) { //for loop loops through collection while i is < length of source's keys

      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        // conditional statement that checks if each object in collection does not have the key in source
        // if it has the key it then checks to see if the object of the key is not equal to the key in source
        return false;
        // if the objects in collection either do not have the key in source or the values of the key are !==
        // then false is returned and the object is filtered out of the collection array
      }
    }
    return true;
    //if a object in collection both has the key in source and the values are === then 
    //call back function returns true and those objects are returned
  });
}