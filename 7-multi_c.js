const args = process.argv.slice(2)
const count = parseInt(args[0]);

if (isNaN(count)) {
	console.log("Missing number of occurences");
} else if (count >= 0) {
	let lines = [];
	for (let i = 0; i < count; i++) { 
		lines.push("C is fun");
	}
	console.log(lines.join("\n"));
}
