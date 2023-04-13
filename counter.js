let add = document.getElementById('increment');
let remove = document.getElementById('decrement');

let int = document.getElementById('number');
let integer = 0;

add.addEventListener('click', function(){
    integer += 1; 
    int.innerHTML = integer;
})

remove.addEventListener('click', function(){
    integer -= 1;
    int.innerHTML = integer;
})

add.addEventListener('mousedown', function(){
    integer += 1; 
    int.innerHTML = integer;
})

remove.addEventListener('right-click', function(){
    integer -= 1;
    int.innerHTML = integer;
})