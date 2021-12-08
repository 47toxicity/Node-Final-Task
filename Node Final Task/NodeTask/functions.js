function biggerNumber(a, b) {
    //Converts variables to Integer
    var aInt = parseInt(a);
    var bInt = parseInt(b);
    if(aInt > 0 && bInt > 0 && Number.isInteger(aInt) && Number.isInteger(bInt)){
        if(aInt > bInt){
            return aInt;
        }
        else if(aInt === bInt){
            return "equal";
        }
        else{
            return bInt;
        }
    }else{
        console.log('\x1b[31m',"INPUT SHOULD BE POSITIVE INTEGER. ", '\x1b[0m');
        return "udefined";
    }
}


function numberSquares(n){
    //Converts variables to Integer
    var nInt = parseInt(n);
    if(nInt > 0 && Number.isInteger(nInt)){
        nS = 0;
        while(nInt > 0){
            nSquares = (nInt*nInt);
            nS = nS + nSquares;
            nInt--;
        }
        return nS;
    }
    else{
        console.log('\x1b[31m',"INPUT SHOULD BE POSITIVE INTEGER. ", '\x1b[0m');
        return "undefined";
    }
}


//module.exports = [log ,biggerNumber, numberSquares];


module.exports = {
    biggerNumber: biggerNumber,
    numberSquares: numberSquares
}