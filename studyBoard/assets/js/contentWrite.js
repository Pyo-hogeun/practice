const create = (e) => {
  let createContent = {
      title: document.querySelector('#contentTitle').value,
      author: document.querySelector('#contentAuthor').value,
      contentText: document.querySelector('#contentText').value
  }

  // console.log(createContent);
  $.ajax({
      url:"/create",
      async: true,
      type: "POST",
      dataType: 'text',
      data: createContent,
  }).done(function(status){
      // console.log('create 성공~!');
      // console.log(data);
      console.log(JSON.parse(status))
      const data = JSON.parse(status);
      if (data.status === 200){
          alert('저장완료되었습니다.');
          window.location.replace(data.redirect);
      }
  })
}

export default create;