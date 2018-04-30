function hide_numbers(s){
  var result = ""
  //함수를 완성해주세요
	var last = s.slice(-4);
  
  var numLeng = s.length;
  var front = [];
  var fronts = "";
  for(var i = 0; i < numLeng - 4; i++){
  	front.push('*');
  }
  
  console.log("마지막 " + last,", 글자수 " + numLeng, ", 앞자리 " + front + ", 앞자리 갯수 : " + front.length);
  
  for( var n = 0; n < front.length; n++ ){
    fronts += front[n];
    }
        
  result = fronts + last;
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + hide_numbers('01033334443'));