
var myObj = {
	"sport":"soccer",
	"hsk":"k",
	"tiger":"mir",
	"friend":"everyone"
};

function checkObj(checkProp) {

	if (myObj.hasOwnProperty(checkProp)) {
		return myObj[checkProp];
	} else {
		return "not found"

	}
}
console.log(checkObj("hi"))
