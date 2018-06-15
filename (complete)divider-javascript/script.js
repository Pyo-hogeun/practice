function solution(arr, divisor) {
	var array = arr;
    var answer = [];

    //나누어 떨어지는 값만 배열에 담기
	for (var i = 0; i < array.length; i++) {
		if ( array[i] % divisor ==  0 ) {
			answer.push(array[i]);
		}

	}
	//오름차순 정렬
	answer.sort( function(a, b){ return a - b});

	// 빈배열일 경우
	if ( answer.length == 0 ) {
		answer.push( -1 );
	}

    console.log(answer);
    return answer;
}

// 테스트용 변수
var arr = [2, 36, 1, 3, 20];
var divisor = 1;

solution(arr, divisor);
