export const card = (data) => {
    let template = "";
    for( let i = 0; i < data.length; i++ ){
        template += `<li class="identification">`+data[i].id+`</li>`
    }
    return template
}