const LOCAL_FORECAST = {
	today :  { min:74, max:83},
	tomorrow : {min:72, max:85}

};

function getMaxOfTmrw(forecast) {
	"use strict";

	const { tomorrow : {max : maxOfTomorrow }} = forecast; 

	//get the tomorrow field from forecast object and assign it to maxOfTomorrow variable//

	return maxOfTomorrow;

}

console.log(getMaxOfTmrw(LOCAL_FORECAST));