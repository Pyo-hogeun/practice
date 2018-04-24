// fn 선택
function selectImg(event) {
	var btn = event.target.previousSibling;
	var btnSrc = btn.src;
	selectDo(btnSrc);
	
}

// fn 배열에 추가
// 선택한 이미지를 변수에 넣기
var selected = [];

function selectDo(btnSrc){
	// 이미 선택된 이미지가 있다면 중복해서 추가하지 않는다.

	if( selected.includes(btnSrc) !== true ){
		selected.push(btnSrc);
		listUp(btnSrc);
	} else {
		console.log("중복")

	}
}

// fn 리스트에 넣기
function listUp(btnSrc){
	
	var addLi = document.createElement("li");
	var addImg = document.createElement("img");
	var addbtnDel = document.createElement("button");
	var Del = document.createTextNode("삭제");

	addbtnDel.appendChild(Del);
	addbtnDel.setAttribute("onclick","listRemove(event)");
	addImg.src = btnSrc;
	addLi.appendChild(addImg);
	addLi.appendChild(addbtnDel);

	var listBasket = document.getElementsByClassName("listUp");
	listBasket[0].appendChild(addLi);

}

// fn 삭제
function listRemove(event){
	var btnRemove = event.target.previousSibling;
	var RemSrc = btnRemove.src;
	listOut(event);
	outSeleted(event);

}
// fn 배열에 삭제
function outSeleted(RemSrc){
	selected.pop(RemSrc);
}

// fn 리스트에서 삭제
function listOut(event){
	var listBasket = document.getElementsByClassName("listUp");
	var itemContainer = event.target.parentElement;
	listBasket[0].removeChild(itemContainer);
}