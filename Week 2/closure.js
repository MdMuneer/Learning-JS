function x(){
	var a=1;
	function y(){
		console.log(a);
	}
	a=500;		//will print 500 while returning y because a does not refer to 7 ,a's reference(a memory location) is returned/
	return y;
}
var z=x();
console.log(z);

//closure is a function bind together with its lexiacal environment(scope) 
// closure gives us access to an outer function's scope from an inner function
z();

