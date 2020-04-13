let page = 1;
let skip = 0;
const contentMore = (e) => {
    console.log('더보기 click');
    page += 1;
    skip += 3
    $.ajax({
        url: '/contentMore?skip='+skip,
        type: 'GET',
    }).done(function(addData){
        let template = '';

        let data = JSON.parse(addData);
        let content = data.content;
        const boarderWrapper = document.querySelector('.board-list > ul');
        console.log(content.length);
        if(content.length > 1){

            for(let i = 0; i < content.length; i++){
                template += `
                    <li>
                        <a href="/contentView/${content[i].contentid}">
                            <span>${content[i].contentid}</span>
                            <span>${content[i].contenttitle}</span>
                            <span>${content[i].contentauthor}</span>
                            <span>${moment(content[i].createdAt).locale('ko').format('YYYY-MM-DD HH:mm:ss')}</span>
                        </a>
                    </li>
                `
            }
            boarderWrapper.insertAdjacentHTML('beforeend', template);
        } else {
            alert('마지막 게시물입니다.');
        }
    })
}
export default contentMore;