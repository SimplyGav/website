// Buttons
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');

c1.addEventListener('click', function () {
    console.log('Button clicked!');
    window.location.href = 'https://github.com/AntiCens'; 
});

c2.addEventListener('click', function () {
    console.log('Button clicked!');
    window.location.href = 'https://github.com/GsLibrary'; 
});

c3.addEventListener('click', function () {
    console.log('Button clicked!');
    window.alert("Not out yet"); 
});