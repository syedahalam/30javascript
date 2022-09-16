// const pickACard = () => {
// 	const rand1 = [
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'J',
// 		'Q',
// 		'K',
// 		'A',
// 	];
// 	const suites = ['clubs', 'diamonds', 'hearts', 'spades'];
// 	rand(rand1);
// 	rand(suites);
// 	// const idx = Math.floor(Math.random() * rand1.length);
// 	// const idx1 = Math.floor(Math.random() * suites.length);
// 	return `{\n Value is: ${rand1[idx]}\n The Suite is: ${suites[idx1]} \n}`;
// };
// console.log(pickACard());

// const rand = (aqq) => {
// 	const idx = Math.floor(Math.random() * aqq.length);
// 	return aqq[idx];
// };

// const random = () => {
// 	const values = [
// 		'2',
// 		'3',
// 		'4',
// 		'5',
// 		'6',
// 		'7',
// 		'8',
// 		'9',
// 		'10',
// 		'J',
// 		'Q',
// 		'K',
// 		'A',
// 	];
// 	const suites = ['Clubs', 'Diamonds', 'Hearts', 'Spades'];
// 	return `{\n  Value: ${rand(values)}\n  Suite: ${rand(suites)}\n}`;
// };
// console.log(random());

// const isPangram = (str) => {
// 	for (let char of 'abcdefghijklmnopqrstuvwxyz') {
// 		if (str.includes(char)) {
// 			return true;
// 		}
// 	}
// 	return false;
// };
// console.log(isPangram('the five boxing wizards jump quickl'));

// const average = (arr) => {
// 	let total = 0;
// 	for (let num of arr) {
// 		total += num;
// 	}
// 	return total / arr.length;
// };
// console.log(average([75, 76, 80, 95, 100]));

// const isValidPassword = (password, username) =>
// 	!password.length < 8 ||
// 	!password === username ||
// 	password.indexOf(' ') !== -1;

// // if (
// // 	password.length < 8 ||
// // 	password === username ||
// // 	password.indexOf(' ') !== -1
// // ) {
// // 	return false;
// // }

// // return true;

// console.log(isValidPassword('syeda123', 'syeda'));
