function z() {
	var b=1000;
	function x(){
		var a=1;
		function y() {
			console.log(a,b);
		}
		y();
	}
	x();
}
z();

//few uses of closure:
//module design pattern
//currying
//function like once
//mainaining state in async world
//setTimeouts
//iterator
