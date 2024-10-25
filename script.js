let set = null;
let data = [];

function choose_set() {
    set = event.target.id

    let reader = new FileReader();
    reader.readAsText(set + ".csv")

    reader.onload = function() {
        data = reader.result.split("/\r\n|\n/");
    }

    reader.onerror = function() {
        alert("Error loading file")
    }

    run_game()
}

function requestOrientationPermission(){
    DeviceOrientationEvent.requestPermission()
    .then(response => {
        if (response == 'granted') {
            window.addEventListener('deviceorientation', orientation_check)
        }
    })
    .catch(console.error)
}

window.addEventListener("deviceorientation", orientation_check)

function orientation_check(e) {
    if (data.length == 0) {
        document.querySelector(".start-screen").hidden = true;
        document.querySelector(".game-select").hidden = false;
        document.querySelector(".landscape-request").hidden = true;
        document.querySelector(".game").hidden = true;
        return
    }

    let alpha = e.alpha;
    let beta = e.beta;
    let gamma = e.gamma;

    document.querySelector("#game").innerHTML = "Alpha: " + alpha + "\n Beta: " + beta + "\n Gamma: " + gamma;

    if (Math.abs(gamma) >= 50 && (Math.abs(beta) <= 25 || Math.abs(beta) >= 155)) {
        document.querySelector(".start-screen").hidden = true;
        document.querySelector(".game-select").hidden = true;
        document.querySelector(".landscape-request").hidden = true;
        document.querySelector(".game").hidden = false;
    } else {
        document.querySelector(".start-screen").hidden = true;
        document.querySelector(".game-select").hidden = true;
        document.querySelector(".landscape-request").hidden = false;
        document.querySelector(".game").hidden = true;
    }
}

function run_game() {
    if (data.length == 0) {
        alert("No words in file")
        return
    }
    let game_word = data[Math.floor(Math.random() * data.length)];
    document.querySelector("#game-word").innerHTML = game_word;
}