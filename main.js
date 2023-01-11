const secondsHand = document.querySelector("[data-seconds]");
const minutesHand = document.querySelector("[data-minutes]");
const hoursHand = document.querySelector("[data-hours]");

function checkTime() {
    let date = new Date();
    let secondsRatio = date.getSeconds() / 60;
    let minutesRatio = (secondsRatio + date.getMinutes()) / 60;
    let hoursRatio = (minutesRatio + date.getHours()) / 12;
    // console.log([date.getSeconds(), secondsRatio, date.getMinutes(), minutesRatio, date.getHours(), hoursRatio])

    setHands(secondsHand, secondsRatio);
    setHands(minutesHand, minutesRatio);
    setHands(hoursHand, hoursRatio);
}

function setHands(element, value) {
    element.style.setProperty("--rotation", value * 360)
}

checkTime();
setInterval(checkTime, 1000);