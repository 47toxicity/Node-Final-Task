const functions = require('../functions');
const assert = require('chai').assert

let existingNumberOfSquares = functions.numberSquares(3);

describe('Tests for functions', function(){

    describe('biggerNumber(a, b) tests', function(){

        it('Result should be a number', function(){
            assert.typeOf(functions.biggerNumber(1,2), 'number');
        });

        it('If numbers are equal result should be "equal"', function(){
            assert.equal(functions.biggerNumber(1,1), 'equal');
        });

        it('If numbers are equal result should be string type', function(){
            assert.typeOf(functions.biggerNumber(1,1), 'string');
        });

    });

    describe('squareNumbers(n) tests', function(){

        it('If n = 5 result should be 55', function(){
            assert.equal(functions.numberSquares(5), '55');
        });     

        it('Result should not be string', function(){
            assert.notTypeOf(functions.numberSquares(5), 'string');
            //assert.notTypeOf(functions.numberSquares(5),'number'); //For purpose, will fail
        }); 

        it('Exists', function(){
            assert.exists(existingNumberOfSquares, 'existingNumberOfSquares exists');
        }); 

    });


});