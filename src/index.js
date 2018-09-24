module.exports = function check(str, bracketsConfig) {
 
    var stub = bracketsConfig;
	
    var closeBrackets = [')', ']', '}'];
    var bracketPairs = '()[]{}';
    var stack = [];
    
    for (var i = 0; i < str.length; i++) {
    
    if (closeBrackets.indexOf(str[i]) != -1) {
       
        if (stack == []) {return false};
            
            var last = stack.pop();
            var position = bracketPairs.indexOf(str[i]);
       
            if(last != bracketPairs[position - 1]) {return false};
        
    } else {
        stack.push(str[i]);
    }

}  

if (stack.length == 0) {return true;}
    else {return false;}
}

