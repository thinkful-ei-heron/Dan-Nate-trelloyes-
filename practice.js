'strict';
// Functionns as arguments (1)
function repeat(fn,n){
	for(x=0; x<n; x++){
		fn();
	}
}

function hello(){
	console.log('Hello World'); 
}

function goodbye(){
	console.log('Goodbye world');
}

repeat(hello,5)
repeat(goodbye,5)

// Functions as arguments (2)
function filter(arr, fn) {
	let test = [];
	for(let item of arr){
		if(fn(item)){
			test.push(item);
		}
	
	}
	return test;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
const filteredNames = filter(myNames, (name) => name [0] === 'R');

console.log(filteredNames) // => ['Rich', 'Ray']

// Functions as return values 
function hazardWarningCreator(typeOfWarning){
	let warningCounter = 0;

	return (location) => {
		warningCounter++;
		console.log(`Danger! there is a ${typeOfWarning} hazard at ${location}!`);
		console.log(`The ${typeOfWarning} hazard alaert has triggered ${warningCounter} time${(warningCounter === 1)? '': 's'} today!`);
	}
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
rocksWarning('Main st and Pacific Ave');
rocksWarning('Cenntinela Ave and Olympic Blvd');


let turtleMovment = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
console.log(turtleMovment.filter((item) => !(item[0] <1)|| (item[1] < 1)));
let totalMovement = turtleMovment.map((move) =>{
	return Math.abs(move[0])+Math.abs(move[1]);
});
console.log(totalMovement);

totalMovement.forEach(function(element,index){
	console.log('Movement #' + index + ": " + elements + "step(s)");
}); 



