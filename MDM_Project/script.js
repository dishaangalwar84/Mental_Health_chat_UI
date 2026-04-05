// EMOTION → CHAT PAGE
function selectEmotion(emotion){
    localStorage.setItem("mood", emotion);
    window.location.href = "chat.html";
}


// CHAT FUNCTION
window.onload = function(){

    let mood = localStorage.getItem("mood");

    if(mood && document.getElementById("chatBox")){
        document.getElementById("chatBox").innerHTML +=
        `<div class="user">My mood is ${mood}</div>
         <div class="bot">I understand you're feeling ${mood}. Tell me more.</div>`;
    }
}

function sendMsg(){

    let input = document.getElementById("msg");
    let chat = document.getElementById("chatBox");

    if(input.value === "") return;

    chat.innerHTML += `<div class="user">${input.value}</div>`;

    chat.innerHTML += `<div class="bot">I'm here for you 💙</div>`;

    input.value = "";

    // open journal after messages
    if(chat.children.length > 6){
        window.location.href = "journal.html";
    }
}


// JOURNAL
function saveJournal(){
    alert("Saved! You earned tokens 🎉");
}

function closeJournal(){
    window.location.href = "chat.html";
}