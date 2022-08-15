const sumAll = function(a, b) {
    let result = 0;

    if((typeof (a && b) == "number") && (a > 0 && b > 0)) {
        if(a < b){    
            for(let i = a; i <= b; i++) {
                result += i;
            }
        }else{ 
            for(let i = b; i <= a; i++) {
                result += i;
        }
        }
        return result;       
    }else {
        return "ERROR";
    }
    
    
};

// Do not edit below this line
module.exports = sumAll;
