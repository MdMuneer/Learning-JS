function trulyRand(val){
	var result = "";

var lookup = {
	"ss":"ss",
	"hsk":"k",
	"tiger":"mir",
	"friend":"everyone"
};
result= lookup[val];

return result;			//random lookup
}


console.log(trulyRand("hsk"))
