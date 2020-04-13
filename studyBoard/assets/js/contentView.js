const contentDelete = (e) => {
  let confirmResult = false;
  confirmResult = confirm('삭제하시겠습니까?');
  if( confirmResult ){
      $.ajax({
          url: "/contentDelete/"+"<%= content.contentid %>",
          async: true,
          type: "POST"
      }).done(function(status){
          const data = JSON.parse(status)
          if( data.status === 200 ){
              alert('삭제되었습니다.');
              window.location.replace(data.redirect);
          }
      })
  }
}

export default contentDelete;