const s = [6,4,8,];
function editInPlace() {
	"use strict";

	s[0]=8;
	s[1]=6;			//we can mutate an array using const
	s[0]=4;


}
editInPlace();
console.log(s)
