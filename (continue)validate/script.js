var validate = {
	validate: function (){
	var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++) {
			var a = inputs[i].value;
		}
		if( a == "" ){
			validate.save();
		} else {
			console.log("통과");
		}
	},
	save: function(){
		alert("not yet");
	}
}
