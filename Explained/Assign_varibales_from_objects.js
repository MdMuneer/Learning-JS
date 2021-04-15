var voxel= { x:3.1, y:7.2, z: 6.54};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x:a, y:b, z:c} = voxel;  //get the field of x,y,z from the object copy it to a,b,c

//Destructuring explae

const AVG_TEMPERATURES = {
	today:44.3,
	tomorrow:78

};

function getTempOfTmrw(avgTemparatures) {
	"use strict";

	const { tomorrow : tempOfTomorrow } = avgTemparatures; 

	//get the tomorrow field from avgTemparatures object and assign it to tempOfTomorrow variable//

	return tempOfTomorrow;

}

console.log(getTempOfTmrw(AVG_TEMPERATURES));
