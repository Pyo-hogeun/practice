function solution() {
    var answer = '';
	
	// 총 일 수 % 7
	var month = [ 31,29,31,30,31,30,31,31,30,31,30,31 ]
	var dayname = [ "SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT" ];
	var nowMonth = document.getElementsByClassName('month')[0].value;
	var nowday = document.getElementsByClassName('date')[0].value;;
	var totalMonth = 0;
	var totalDay = 0;
	var cal;
	function total(m, d){
		if( m == 1 ){
			totalDay = d;
			return totalDay;
		} else {
			for ( var i = 0; i < m - 1; i++ ) {
				totalMonth += month[i];
			}
			totalDay = totalMonth + d;
			return totalDay;
		}
	}
	total(nowMonth, nowday);
	cal = (totalDay % 7 + 4) % 7; // 1월1일 = 금요일 값으로 재산정
    answer = dayname[cal];
    // console.log( "answer 값 : " + answer );
    // return answer;
	document.getElementById("result").innerHTML = answer;
}
