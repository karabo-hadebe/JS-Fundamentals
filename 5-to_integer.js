const args = process.argv.slice(2);

function integer() {
	const checker = parseInt(args[0], 10);
	if (!isNaN(checker)) {
        console.log("My Number:" + " " + checker);
} else {
        console.log("Not a number");
}}

integer()
