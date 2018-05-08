var validate = {
	validate: function (){
	var inputs = document.getElementsByTagName("input");
		for (var i = 0; i < inputs.length; i++) {
			var a = inputs[i].value;
		}
		if( a == "" ){ // input 이 비어있다면 empty 알림
			validate.empty();
		} else {
			console.log("통과");
			// 휴대전화번호 검사
			validate.celphoneNumber();
		}
	},
	empty: function(){
		alert("empty");
	},
	//휴대전화번호
	celphoneNumber: function(){
		var celphoneNumber = document.getElementsByName('celphonenumber');
		// ㄴ첫번째
		// 국번 010 ~ 019 까지
		// 총 세자리
		var cel01 = celphoneNumber[0].value;
		var patt1 =  /[01][0-9]/g;
		if( cel01 == cel01.match(patt1) ){
			console.log('celphonenumber[0] pass')
		} else {
			celphoneNumber[0].addEventListener('onfocusout', validate.alertPhrase());
		}
	},
	alertPhrase: function(){
		console.log('휴대전화번호 값이 잘못됐습니다.')
	}
}
