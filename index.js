let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeCount = 0
let guestCount = 0

function homeBtn1() {
    homeCount += 1
    homeScore.textContent = homeCount
}
function homeBtn2() {
    homeCount += 2
    homeScore.textContent = homeCount
}
function homeBtn3() {
    homeCount += 3
    homeScore.textContent = homeCount
}


function guestBt1n() {
    guestCount += 1
    guestScore.textContent = guestCount
}
function guestBtn2() {
    guestCount +=2
    guestScore.textContent = guestCount
}
function guestBtn3() {
    guestCount +=3
    guestScore.textContent = guestCount
}

function newGame() {
    guestScore.textContent = 0
    guestCount = 0
    homeScore.textContent = 0
    homeCount = 0
}