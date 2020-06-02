let x = 0;


let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let d = document.querySelector('#d');
let e = document.querySelector('#e');


a.addEventListener('click', function() {
    x = 0
});
b.addEventListener('click', function() {
    x = 1
});
c.addEventListener('click', function() {
    x = 2
});
d.addEventListener('click', function() {
    x = 3
});
e.addEventListener('click', function() {
    x = 4
});

switch (x) {
    case 0:
        console.log('abba');
        break;
    case 1:
        console.log('guns and roses');
        break;
    case 2:
        console.log('led zepplin');
        break;
    case 3:
        console.log('quien');
        break;
    case 4:
        console.log('beatles');
        break;
}

