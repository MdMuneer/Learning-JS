const arr1=['jan','feb','may','oct'];
let arr2
(function() {
	arr2 = [...arr1]; 		//spread operator for spreading an array here spreading contents of arr1 to arr2///
	arr1[0] ='potato'
})();
console.log(arr2);
