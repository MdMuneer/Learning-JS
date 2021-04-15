function trulyRand(val){
	var result = "";

var lookup = {
	"ss":"ss",
	"hsk":"k",
	"tiger":"mir",
	"friend":"everyone"
};
result= lookup[val];

return result;
}


console.log(trulyRand("hsk"))
