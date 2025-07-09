const args = process.argv.slice(2)
const count = parseInt(args[0]);

if (isNaN(count) || count < 0) {
	console.log("Missing number of occurences");
} else {
	let lines = [];
	for (let i = 0; i < count; i++) { 
		lines.push("C is fun");
	}
	console.log(lines.join("\n"));
}
