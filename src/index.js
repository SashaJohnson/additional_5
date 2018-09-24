module.exports = function check(str, bracketsConfig) {
  /*
  var configList = [];
  for (var i = 0; i < configList.length; i++) {
	  
	*/
	
	var stub = bracketsConfig;
	
	var count = 0;
	
	for (var i = 0; i < str.length; i++) {
		
		if (str[i] == "(") {
			
			count++;
			
		}
		
		else if (str[i] == ")") {
				
				if (count == 0) {
					
					return false;
					
				} else {
				
					count--;
				
			}
			
	}
	

  
    if (count == 0) {
	  
	    return true;
	  
    } else {
	  
	    return false 
	
	    }
  
	}

}