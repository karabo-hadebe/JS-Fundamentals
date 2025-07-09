const args = process.argv.slice(2)

function factorial(a) {
	if (isNaN(a) || a < 0) { return 1;
	}
	if (a === 0 || a === 1) {
		return 1;
	}
	return a * factorial(a - 1);
}

const a = args[0]

console.log(factorial(a))
