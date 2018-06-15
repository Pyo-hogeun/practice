function solution(seoul) {
    var answer = '';
    answer = seoul.indexOf("Kim");
    console.log("김서방은 " + answer +"에 있다.");
    return "김서방은 " + answer +"에 있다.";
}

var seoul = ["Jane", "Kim", "pyo", "You", "kyu"]
solution(seoul);