// fn 선택
function selectImg(event) {
	var btn = event.target.previousSibling;
	var btnSrc = btn.src;
	// console.log("이미지 실제 주소 : " + btnSrc);
	
	// 이미 선택된 이미지가 있다면 중복해서 추가하지 않는다.
	check(btnSrc);
	
}

// fn 배열에 추가
// 선택한 이미지를 변수에 넣기
var selected = [];

function selectDo(btnSrc){
	selected.push(btnSrc);
}

// 중복검사
function check(btnSrc) {
	console.log("중복체크",selected.indexOf(btnSrc));
	if ( selected.indexOf(btnSrc) === -1 ) {
		selectDo(btnSrc);
		listUp(btnSrc);
	} else {
		console.log("이미 선택되었습니다.")
	}
}


// fn 리스트에 넣기
function listUp(btnSrc){
	
	var addLi = document.createElement("li");
	// 이미지 태그 생성
	var addImg = new Image();
	addImg.src = btnSrc;
	addImg.addEventListener('load',function(){

	});
	
	addButton = document.createElement('button');
	addButton.setAttribute('onclick','delList(this);');
	addButton.setAttribute('class','btn');
	addButton.innerHTML = '삭제';
	addLi.appendChild(addImg);
	addLi.appendChild(addButton);

	var listBasket = document.getElementsByClassName("listUp");
	listBasket[0].appendChild(addLi);

}

// fn 삭제
function delList(delTarget){
	console.log("선택한 버튼의 리스트",delTarget.parentElement);
	var delTargetList = delTarget.parentElement;
	delTargetList.parentNode.removeChild(delTargetList);
	delSeleted(delTarget);
}

// fn 배열에 삭제
function delSeleted(delTarget) {
	var delBtn = delTarget.previousSibling.src;
	selected.pop(delBtn);
}


