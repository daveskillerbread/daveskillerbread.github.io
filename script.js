let messages = [
    "You clicked the button!",
    "You clicked the button again!",
    "Wow, you clicked the button again...",
    "Stop clicking the button asshat I don't get paid enough for this"
];

let clickCount = 0;
let customBackground = false;



function changeText() {
    if (clickCount < messages.length){
    document.getElementById("greeting").textContent = messages[clickCount];
    clickCount++;
    } else{
        console.log("No more text changes available.");
    }
}



function displayGreeting(){
    const name = document.getElementById("nameInput").value;

    if(name){
        document.getElementById("greeting").textContent = `Hello, ${name}! Welcome to Dave's Killer Webpage!`;
    } else{
        document.getElementById("greeting").textContent = "Please enter your name!";
    }
}

function moveButton(){
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const button = document.getElementById("button4");
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function changeBackground(){
    const body = document.body;
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    body.style.backgroundColor = randomColor;
    customBackground = true;
}

function resetColor(){
    const button = document.getElementById('toggleButton');
    const body = document.body;

    button.textContent = 'Switch to light mode';
    body.classList.add('dark-mode');
    customBackground = false;
    body.style.backgroundColor = '';
}

function toggleMode() {

const body = document.body;
const button = document.getElementById('toggleButton');

    body.style.backgroundColor = '';
    if (body.classList.contains('dark-mode')){
        button.textContent = 'Switch to dark mode';
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
    } else { 
        button.textContent = 'Switch to light mode';
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
    }
}
