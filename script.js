const isValidPassword = (password, username) => {
	if (password.length < 8 && password === username) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	return true;
};
console.log(isValidPassword('syeda123', 'syeda'));
