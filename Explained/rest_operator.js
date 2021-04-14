const sum = (function() {

	return function sum(...args) {
		return args.reduce((a,b) => a+b, 0);

	};
})();										//using rest operator ...					

console.log(sum(1,2,315))