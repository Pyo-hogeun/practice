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
	if( n > x.length - 1 ){
		showSlide = 0
	}
	if( n < 0 ){
		showSlide = x.length - 1
	}
	for ( i = 0; i < x.length; i++ ){
		x[i].className = " ";
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

	wantPick = document.getElementsByClassName("image_list");
function moreInfo() {
	var wantPick;
	console.log(wantPick.lastChild);
}




// 참고용


// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }