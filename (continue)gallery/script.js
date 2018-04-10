// fn 선택
function selectImg(event) {
	var btn = event.target.previousSibling;
	var btnSrc = btn.src;
	console.log("이미지 실제 주소 : " + btnSrc);
	selectDo(btnSrc);
	listUp(btnSrc);
}

// fn 배열에 추가
// 선택한 이미지를 변수에 넣기
var selected = [];

function selectDo(btnSrc){
	// 이미 선택된 이미지가 있다면 중복해서 추가하지 않는다.
	selected.push(btnSrc);
}

// fn 리스트에 넣기
function listUp(btnSrc){
	
	var addLi = document.createElement("LI");
	var addImg = document.createElement("IMG");
	addImg.src = btnSrc;
	addLi.appendChild(addImg);

	var listBasket = document.getElementsByClassName("listUp");
	listBasket[0].appendChild(addLi);

}

// fn 삭제

// fn 배열에 삭제

