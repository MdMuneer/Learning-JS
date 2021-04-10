var collection = {
	"1245": {
		"album":"hum chale",
		"artist":"arijit",
		"tracks": [
			"aajao",
			"rock"
		]
	},
	"1456": {
		"album":"humma",		
		"artist":"arijit1",		// Created a record collection with different information// 
		"tracks": [
			"kyun",
			"suno"
		]
	},
	"1478": {
		"album":"new",
		"artist":"ss",
		"tracks": [
			"onetwo",
			"naya"
		]
	},
	"5439": {
		"album":"ABBA Gold",
		}

};



 //keeping a copy of collection for tests  //
var collectioncopy =JSON.parse(JSON.stringify(collection));  //json.stringify to make a copy of object//
 

function updateRecords(id, prop, value) {     //update record function for passing id. prop  ,value  for updation//
	if (value ===  "") {
		delete collection[id][prop];		//if value is blank delete property//
	} else if (prop === "tracks"){
		collection[id][prop] = collection[id][prop] || []; //if tracks does not exists create an empty array //
		collection[id][prop].push(value);  //then pushing the value to the tracks//
	} else {
		collection[id][prop] = value; 
	}

	return collection;                       //return full collection//

}

console.log(updateRecords(5439, "artist",  "ABBA")); //updating artist name// 
console.log(updateRecords(5439, "tracks",  "new1")); //updating artist name// 

