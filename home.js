$("#welcomeMessage")

function clockTimer() {

    const now = new Date(); /*for viewing time*/
    let hours = now.getHours();
    const merdium = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    let minutes = now.getMinutes().toString().padStart(2, 0);
    let seconds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${merdium}`;
    document.getElementById("time").textContent = timeString; /*selecting the id of the text */
}
clockTimer();
setInterval(clockTimer, 1000); /* for updating clock every second */


/* notes function */
$(document).ready(function () {

    const notes = document.getElementById('notes');
    const addTask = document.getElementById('addTaskBtn');
    const inputTxtBox = document.getElementById('inputTextBox');
    const addInput = document.getElementById('addInputBtn');

    $('#addTaskBtn').on('click', () => {
        
        $("#addTaskBtn").hide();
        $('#container').show();
        $("#addInputBtn").val('').focus();
    });
    $("#addInputBtn").on("click", () =>{
        let userText = $("#inputTxtBox").val();
        console.log(userText);
        if(userText.trim() !=="" || ""){
            let newItem = document.createElement('li');
            newItem.textContent = userText;
            notes.appendChild(newItem);
        }
        else{
            alert("Please enter some text...");
        }
        $("#addTaskBtn").show();
        $("#inputTextBox").val('');
        $("#container").hide();
    });
}); 


/* welcome message */
if (document.body.id === 'home') {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        welcomeMessage.textContent = `Hello, ${loggedInUser.name}!`;
    }
    else {
        window.location.href = 'login.html';
    }
}