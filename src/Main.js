const { mergeStrings } = require('./StringMerger');

// Main entry point
function main() {
    console.log('Hello, world! This is a program that is designed to merge two strings together.');

    const readline = require('readline');

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    rl.question('Please enter the first string: ', (answer1) => {
        rl.question('Please enter the second string: ', (answer2) => {
            const merged = mergeStrings(answer1, answer2);
            console.log(`The merged string is: ${merged}`);
            rl.close();
        });
    });
}

main();