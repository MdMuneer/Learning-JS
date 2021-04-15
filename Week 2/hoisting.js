var sports = "football";
								//hoisting :defined the variable but does not give the value//
function test() {
	console.log(sports);
	var y =1;
	function newTest() {
		console.log(sports);
	}
	newTest();

}
console.log(y);

test();
					