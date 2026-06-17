function firstChar(text) {
	let modi = text.trim()
	if( modi[0] === undefined ) {
		return ""
	} else {
		return modi[0]
	}
}


// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
