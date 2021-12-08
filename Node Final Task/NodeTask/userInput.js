//const [log, biggerNum, numSq] = require('./functions');
const functions = require('./functions');
const fs = require('fs');
const readLine = require('readline');
const { fileURLToPath } = require('url');
const { exit } = require('process');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});


var recursiveAsyncReadLine = function () {
    rl.question("Please Choose a function:\n"
        + "1) biggerNumber(a, b)\n"
        + "2) numberSquares(n)\n"
        + "3) Exit\n"
        , function (line) {

            switch (line){
                case "1":
                    //User choose biggerNumber(a, b) function
                    console.log("--------------------------");
                    console.log('\x1b[31m',"biggerNumber(a, b) FUNCTION", '\x1b[0m');
                    rl.question("*Please enter numbers two numbers to be compared (separated by enter):\n", function(first) {
                        rl.question("", function(second) {
                            console.log(`Your first number is ${first} and your second number ${second}`);
                            let bN = functions.biggerNumber(first, second);
                            console.log('\x1b[33m',`Result:${bN}`, '\x1b[0m');
                             //Saves result into result.txt file
                            fs.writeFile('./documents/results.txt', `biggerNumber(${first},${second}) = ${bN}`, () =>{
                                console.log('\x1b[32m',"!Last result has been written in results.txt!", '\x1b[0m');
                                //Recursively calls itself to ask user for next function
                                recursiveAsyncReadLine();
                            });
                        });
                    });
                    break;
                case "2":
                    //User chooses squareNumber(n) funnction
                    console.log("--------------------------");
                    console.log('\x1b[31m', "numberSquares(n) FUNCTION", '\x1b[0m');
                    rl.question("*Please enter a number N to see how many squares can fit in N * N square grid:\n", function(sqNumber) {
                        let sqN = functions.numberSquares(sqNumber);
                        console.log('\x1b[33m', `Result is ${sqN} squares`, '\x1b[0m'); 
                        //Saves result into result.txt file
                        fs.writeFile('./documents/results.txt', `numberSquares(${sqNumber}) = ${sqN}`, () =>{
                            console.log('\x1b[32m',"!Last result has been written in results.txt!",'\x1b[0m');
                            //Recursively calls itself to ask user for next function
                            recursiveAsyncReadLine();  
                        });   
                    });

                    break;
                case "3":
                    //User chooses exit the program
                    return rl.close();
                default:
                    console.log("No such option. Please enter another: ");
            }
    recursiveAsyncReadLine();
    });
};

recursiveAsyncReadLine(); 

