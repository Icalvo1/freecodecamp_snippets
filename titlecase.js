// provided string with the first letter of each word capitalized.

//step 1 take a string and convert to array
//step 2 iterate through each array index
//step 3 uppercase each item in each array index
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}