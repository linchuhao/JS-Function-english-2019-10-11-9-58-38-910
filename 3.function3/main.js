function alphabetSort(message){
	var message = message.split("")
	var res = ""
	for(var i = 0; i < message.length-1; i++){
		for(var j = i + 1; j < message.length; j++){
			if(message[i] > message[j]){
				var temp = message[i];
				message[i] = message[j];
				message[j] = temp;
			}
		}
	}
	for(i in message){
		res += message[i]
	}
	return res;
}