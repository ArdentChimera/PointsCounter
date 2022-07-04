let countHome = document.getElementById("score-home")
let countGuest = document.getElementById("score-guest")
let scoreHome = 0
let scoreGuest = 0

function add1Point() {
    scoreHome += 1;
    countHome.textContent = scoreHome;
}
function add2Point() {
    scoreHome += 2;
    countHome.textContent = scoreHome;
}
function add3Point() {
    scoreHome += 3;
    countHome.textContent = scoreHome;
}

function add1PointGuest() {
    scoreGuest += 1;
    countGuest.textContent = scoreGuest;
}
function add2PointGuest() {
    scoreGuest += 2;
    countGuest.textContent = scoreGuest;
}
function add3PointGuest() {
    scoreGuest += 3;
    countGuest.textContent = scoreGuest;
}


function reset() {
    countGuest.textContent = 0;
    countHome.textContent = 0;
}
