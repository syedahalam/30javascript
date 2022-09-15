const containsPurple = (arr) => {
	for (let color of arr) {
		if (color === 'purple') {
			return true;
		}
	}
	return false;
};
console.log(containsPurple(['blue', 'purple', 'pink']));
