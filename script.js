const numbers = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];
let total = 0;
for (let i = 0; i < numbers.length; i++) {
	let rows = numbers[i];
	for (let j = 0; j < rows.length; j++) {
		total += rows[j];
	}
}
console.log(total);
