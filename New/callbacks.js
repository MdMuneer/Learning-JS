const fetch = require('node-fetch')
const fs = require('fs')


//settimeout

setTimeout(() =>{
	console.log('waited 1 second')
}, 3000)

//error first callback

fs.readFile('./test.txt', {encoding:'utf-8'}, (err,data) => {
	if (err) {
		console.error('error')
		console.error(err);
	}
	else{
			console.error('GOT DATA')
			console.log(data);
		}	
});

//create a promise

const myPromise = new Promise((resolve, reject) => {
	const rand = Math.floor(Math.random() * 2);
	if(rand ===0 ) {
		resolve();

	} else  {
		reject();
	}
})

myPromise.then(() => console.log('success')).catch(() => console.log('wrong'))