function reverseString(message){
	var str = "";
	for(var i = message.length; i >= 0; i--){
		str += message.charAt(i)
	}
	console.log(str)
}
reverseString("hello")