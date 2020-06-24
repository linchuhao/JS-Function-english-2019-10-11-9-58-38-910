function palindrome(message){
	var middle = message.length/2 -1;
	for(var i = message.length-1,j = 0; i >= middle, j<=middle; i--,j++){
		if(message.charAt(i) !== message.charAt(j))
			return false;
	}
	return true;
}