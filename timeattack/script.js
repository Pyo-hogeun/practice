var n, min, sec, milSec, cSec, cMilsec;

n = new Date();

// 현재시간
hour = n.getHours();
min = n.getMinutes();
sec = n.getSeconds();
milSec = n.getMilliseconds();

minstr = min.toString();
secstr = sec.toString();


// 캐치시간
cSec = sec;
cMilsec = milSec;

setInterval(function(){
	// 현재시간
	n = new Date(); 
	hour = n.getHours();
	min = n.getMinutes();
	sec = n.getSeconds();
	milSec = n.getMilliseconds();

	hourstr = hour.toString();
	minstr = (n.getMinutes()<10?"0":"") + min.toString();
	secstr = (n.getSeconds()<10?"0":"") + sec.toString();
	var z = "";
	if( 10 < milSec && milSec < 100 ){
		z = "0"; 
	} else if ( 0 <= milSec && milSec < 10 ){
		z = "00"; 
	} else {
		z = "";
	}
	milSecstr = z + milSec.toString();
	$('.now .hour').text(hourstr);
	$('.now .min').text(minstr);
	$('.now .sec').text(secstr);
	$('.now .milSec').text(milSecstr);
	console.log("hour : "+ hour +" min : " + min + ", sec : "+ sec + " milSec : " + milSec + " z : " + z);
}, 1);

function stop(){
	n = new Date(); 
	hour = n.getHours();
	min = n.getMinutes();
	sec = n.getSeconds();
	milSec = n.getMilliseconds();

	
	hourstr = hour.toString();
	minstr = (n.getMinutes()<10?"0":"") + min.toString();
	secstr = (n.getSeconds()<10?"0":"") + sec.toString();
	
	milSecstr = (n.getMilliseconds()<100?"0":"") + milSec.toString();

	$('.record .list').prepend("<li><span class='c-min'></span> : <span class='c-sec'></span> : <span class='c-milsec'></span></li>")
	$('.list li').eq(0).children('.c-min').text(minstr);
	$('.list li').eq(0).children('.c-sec').text(secstr);
	$('.list li').eq(0).children('.c-milsec').text(milSecstr);
}
