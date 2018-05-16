var validate = {
	validate: function(){
		document.getElementsByName('save')[0].addEventListener('click', validate.validateSub);
		validate.valLengthTrigger();
	},
	validateSub: function (){
		var inputs = document.getElementsByTagName("input");
		var arr = [];
		function emptySlut(emp) {
			return emp = "";
		}
		for (var i = 0; i < inputs.length; i++) {
			var a = inputs[i].value;
			arr.push(a);
		}
		if( arr.some(emptySlut) == true ){ // input 이 비어있다면 empty 알림
			validate.empty();
		} else {
			console.log("빈칸없음 통과");
			// 휴대전화번호 검사
			validate.celphoneNumber();
		}
	},
	empty: function(){
		console.log('빈칸이 있습니다. error:empty')
	},
	//휴대전화번호
	celphoneNumber: function(){
		var celphoneNumber = document.getElementsByName('celphonenumber');
		var convertNum = function(val){
			return Number(val);
		}
		var matchValue = function(cel, patt){
			return cel.match(patt);
		}
		var cel01 = celphoneNumber[0].value;
		var cel02 = celphoneNumber[1].value;
		var cel03 = celphoneNumber[2].value;
		// 첫번째
		// 국번 010 ~ 019 까지
		// 총 세자리
		var patt1 =  /01[0-9]/g;
		//두번재
		// 3~4자리
		// 첫째자리는 '1'로 시작
		var patt2 = /^[1-9][0-9][0-9][0-9]?/g;

		// var matchValue = cel01.match(patt1)
		if ( matchValue( cel01, patt1 ) == null ){
			console.log('휴대전화번호 국번이 잘못됐습니다 error: null')
		} else if ( convertNum(cel01 ) > 20 ){
			console.log('휴대전화번호 국번이 잘못됐습니다.error: >20')
		} else if ( matchValue(cel02, patt2 ) == null ){
			console.log('휴대전화번호 가운데자리가 잘못됐습니다. error: < 1xx, 첫째자리')
		} else if ( convertNum(cel02) > 9999 ){
			console.log('휴대전화번호 가운데자리가 잘못됐습니다. error: > xxxx')
		}
		else {
			console.log('휴대전화번호 통과')
		}
		
	},
	
	valLengthTrigger: function(){
		var celphoneNums = document.getElementsByName('celphonenumber');
		function slice3(){
			if( this.value.length > this.maxLength ){
				this.value = this.value.slice(0, this.maxLength);
			}
		}
		for( i = 0; i < celphoneNums.length; i++ ){
			celphoneNums[i].addEventListener('input', slice3);
		}

	},
	
	alertPhrase: function(){
		console.log('휴대전화번호 값이 잘못됐습니다.')
	}
}
