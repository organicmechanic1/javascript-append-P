$(document).ready(function(){

	var entry = "";
	var paragraph = document.querySelector("#input")

	paragraph.innerText = entry

	$(".button").click(function(value){
		 console.log(value)

		var value = String(value.target.value)

		if( value === "break" ) {
			value = "\n"
			var para = document.createElement("P");
			var t = document.createTextNode(entry)
			para.appendChild(t);
			document.body.appendChild(para)
		}
		
		entry = entry + value


		console.log(entry)
		paragraph.innerText = String(entry)


	
	})
})


	// var foo = function(){
	// 	if ("#one").click(){
	// 		return("value")
	// 	}
	// }

	// var text = document.querySelector("#input");



	// if ( value === "<br>") {
		// 	console.log(entry)
		// 	paragraph.append(linebreak)
		// }

		// var value = this.value.toString();

		// if(value === "break"){
		// 	value = "<br/>"
		// }

		// text.innerHtml(String(value))













