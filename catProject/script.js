import { card } from './card.js';
// import './style.css';



const data = [];
const getImg = (url) => {
    fetch(url)
    .then(res => res.json())
    .then(json => {
        // document.querySelector('.id-list').innerHTML = card(json);
        var result = json.results;
        var el = '';
        for(var i = 0; i < result.length; i++){
            el += `<li><span>`+result[i].name +`</span>&nbsp;&nbsp;<span style="color:red">`+result[i].nums+`</span></li>`
        }
        document.querySelector('body').innerHTML = el;
    });
}

getImg('https://randomapi.com/api/dlagblvl?key=JG56-6WXO-5ZYN-K45S&results=3');
