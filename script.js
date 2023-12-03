document.addEventListener("DOMContentLoaded", (event) => {
    console.log("Loaded")
});

$(document).ready(function() {
    // $("a").html("Changed");
});

const hB = document.getElementById('homeButton');
const uB = document.getElementById('userButton');
const cB = document.getElementById('codeButton');

const bA = document.getElementById('ButtonA');
const bB = document.getElementById('ButtonB');
const bC = document.getElementById('ButtonC');

hB.addEventListener('click', function () {
    window.location.href = './index.html';
    console.log('Button clicked!');
});

uB.addEventListener('click', function () {
    window.location.href = './about.html';
    console.log('Button clicked!');
});

cB.addEventListener('click', function () {
    window.location.href = './projects.html';
    console.log('Button clicked!');
});

bA.addEventListener('click', function () {
    window.location.href = './about.html';
    console.log('Button clicked!');
});

bB.addEventListener('click', function () {
    window.location.href = './projects.html';
    console.log('Button clicked!');
});

bC.addEventListener('click', function () {
    window.alert("Nothing Added Yet :C")
    console.log('Button clicked!');
});