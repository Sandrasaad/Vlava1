// var services = [
//     { title :'service 1' , Description:'Description 1'},
//     { title :'service 2' , Description:'Description 2'},
//     { title :'service 3' , Description:'Description 3'},
//     { title :'service 4' , Description:'Description 4'},
//     { title :'service 5' , Description:'Description 5'},
//     { title :'service 6' , Description:'Description 6'}
// ]

fetch('https://apivlava.onrender.com/services')
.then(response => response.json())
.then(services => {

    var service_content = `
    <div class="icon"><i class="bi bi-briefcase"></i></div>
    <h4 class="title"><a href="">Lorem Ipsum</a></h4>
    <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
  `

var services_row = document.getElementById('services_row');
services.forEach(services => {
var _div= document.createElement('div');

var _current_content = `<div class="icon"><i class="bi bi-briefcase"></i></div>
<h4 class="title"><a href="">${services.title}</a></h4>
<p class="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
`
_div.innerHTML = _current_content;
_div.className = 'col-lg-4 col-md-6 icon-box';
services_row.appendChild(_div);
});

})




   
