const args = process.argv.slice(2);

function integer() {
        const checker = Number(args[0], 10);
        if (Number.isInteger(checker)) {
        console.log("My Number:" + " " + checker);
} else {
        console.log("Not a number");
}}
integer()

