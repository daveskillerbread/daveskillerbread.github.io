let messages = [
    "You clicked the button!",
    "You clicked the button again!",
    "Wow, you clicked the button again...",
    "Stop clicking the button asshat I don't get paid enough for this"
];

let clickCount = 0;




function changeText() {
    if (clickCount < messages.length){
    document.getElementById("greeting").textContent = messages[clickCount];
    clickCount++;
    } else{
        console.log("No more text changes available.");
    }
}

function changeBackground(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
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
function resetColor(){
    const originalColor = '#333';
    document.body.style.backgroundColor = originalColor;
}