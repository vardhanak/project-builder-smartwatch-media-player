function _(id) {
    return document.querySelector(id);
}

// Time
setInterval(() => {
    let today = new Date();
    let day = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    _("#day").textContent = `${day[today.getDay()]}`;
    _("#timeS").textContent = `${String(
      today.getHours()
    ).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}`;
    _("#timeB").textContent = `${String(
      today.getHours()
    ).padStart(2, "0")}:${String(today.getMinutes()).padStart(2, "0")}`;
}, 1000);

// Messages 
let msgList = [
    "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
    "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.",
    "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification.",
    "React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies."
];

let selectMsg = (msgId) => {
    let msg = _("#showMsg");
    msg.style.display = "block";
    msg.textContent = msgList[msgId - 1];
};

// Media Player
let smsState, musicState, watchState;
smsState = musicState = watchState = false;

function selectScreen(scr) {
    setOff();
    let icons = _(".icons").childNodes;
    switch (scr) {
        case 0:
            _(".timeB").style.display = "flex";
            break;
        case 1:
            _(".sms").style.display = "flex";
            icons[scr].style.opacity = 1;
            break;
        case 3:
            _(".media").style.display = "flex";
            icons[scr].style.opacity = 1;
            break;
    }
}

function setOff() {
    let icons = _(".icons").childNodes;
    icons[1].style.opacity = 0.5;
    icons[3].style.opacity = 0.5;
    icons[5].style.opacity = 0.5;
    _(".timeB").style.display = "none";
    _(".sms").style.display = "none";
    _(".media").style.display = "none";
}

function selectSong(sid) {
    _("#song").src = `./songs/s${sid}.mp3`;
    _("#song").src = `./img/s${sid}.jpg`;
}