var contacts = [
	{
		"firstname":"akira",
		"lastname":"laine",
		"number":"44644545",
		"likes":["pizza","coding"]
	},
	{
		"firstname":"jhon",
		"lastname":"juy",
		"number":"14277878",
		"likes":["burger","code"]
	},
	{
		"firstname":"mita",
		"lastname":"draea",
		"number":"767674545",
		"likes":["sports","singing"]
	},
	{
		"firstname":"niko",
		"lastname":"fish",
		"number":"45987867",
		"likes":["drawing","eating"]
	},
	{
		"firstname":"mite",
		"lastname":"hero",
		"number":"1234567",
		"likes":["nrew","new"]
	},

];

function lookUpProfile(name, prop) {
	for (var i=0; i < contacts.length; i++) {  //iterating through  all the contact lisst//
		if(contacts[i].firstname === name) {    //checking if there is a name in the list//
			return contacts[i][prop] || "no such property";  //using or operator//
		}                                        
	}
	return "no such contact";

}

var data = lookUpProfile("akira","likes");

console.log(data)