// 첫번째 이미지 띄우기
var x = document.getElementsByTagName("LI");
var showSlide = 0,
	al = 0;
movement(showSlide);

function plus(n){
	movement(showSlide += n);
}


function movement(n){
	var i;
	// 마지막 슬라이드일 경우 다음버튼 클릭시 첫번째로 돌리기
	if( n > x.length - 1 ){
		showSlide = 0
	}

	// 첫 슬라이드일 경우 이전 클릭시 마지막으로 돌리기
	if( n < 0 ){
		showSlide = x.length - 1
	}

	for ( i = 0; i < x.length; i++ ){
		x[i].classList.remove = "active";
	}
	x[showSlide].className = "active";
}

// 전체보기
function allVeiw(n) {
	al += n;
	// 전체보기 on
	if( al == 1 ){
		for( i = 0; i < x.length; i++ ){
			x[i].className = "active";
		}
	}
	// 전체보기 off
	else if( al > 1){
		al = 0;
		movement();
	}
	else{
		al = 0;
	}
}

// 선택하기
function selectMy() {
	var imageList = document.getElementsByClassName("image_list")[0];
	var c = imageList.getElementsByClassName("active")[0];
	
	c.classList.add("selected");
}


console.log( )
