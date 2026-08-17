const input = document.getElementById("questionInput");
const sendButton = document.getElementById("sendButton");
const chatMessages = document.getElementById("chatMessages");


/*
    YOUR PRE-WRITTEN QUESTIONS AND ANSWERS
*/

const answers = {
    "who is your owner":
        "ohh my owner is Daiwik Devaramani",

    "what is photosynthesis":
        "Photosynthesis is the process by which green plants make food using sunlight, carbon dioxide and water.",

    "what is a cell":
        "A cell is the basic structural and functional unit of life.",

    "what is force":
        "Force is a push or pull that can change the motion or shape of an object.",

    "what is velocity":
        "Velocity is the rate of change of displacement with respect to time.",

    "what is differentiation":
        "Differentiation is a mathematical process used to find the rate at which one quantity changes with respect to another."
};


/* ---------------- SEND MESSAGE ---------------- */

function sendMessage() {

    const question = input.value.trim();

    if (question === "") {
        return;
    }


    // Add user's question
    addUserMessage(question);


    // Find answer
    const cleanQuestion = question.toLowerCase();

    let answer = answers[cleanQuestion];


    // If question isn't stored
    if (!answer) {

        answer =
            "Sorry, I don't have an answer for that question yet. I am still learning!";

    }


    // Small delay to make it feel like a real tutor
    setTimeout(() => {

        addAIMessage(answer);

    }, 400);


    // Clear input
    input.value = "";
}


/* ---------------- USER MESSAGE ---------------- */

function addUserMessage(text) {

    const message = document.createElement("div");

    message.className = "message user-message";

    message.innerHTML = `
        <div class="message-content">
            <p>${text}</p>
        </div>
    `;

    chatMessages.appendChild(message);

    scrollToBottom();
}


/* ---------------- AI MESSAGE ---------------- */

function addAIMessage(text) {

    const message = document.createElement("div");

    message.className = "message ai-message";

    message.innerHTML = `
        <div class="avatar">✦</div>

        <div class="message-content">
            <strong>Study.ai</strong>
            <p>${text}</p>
        </div>
    `;

    chatMessages.appendChild(message);

    scrollToBottom();
}


/* ---------------- SCROLL ---------------- */

function scrollToBottom() {

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}


/* ---------------- BUTTON ---------------- */

sendButton.addEventListener("click", sendMessage);


/* ---------------- ENTER KEY ---------------- */

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});