function type1(){
  let d = new Date();
  console.log(d);
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let day = d.getDay();
  let hour = d.getHours();
  let datString = ['일', '월', '화', '수', '목', '금', '토'];

  let dateString = year + '-' + month + '-' + date + ' ' + datString[day] + ' ' + hour + '시';
  document.querySelector('.type1').innerHTML = dateString;
}