let data = {"a": [
    {
      "word": "a"
    },
    {
      "word": "b"
    },
    {
      "word": "c"
    },
    {
      "word": "d"
    },
    {
      "word": "e"
    },
    {
      "word": "f"
    }
], "b" : [
    {
      "word": "q"
    },
    {
      "word": "w"
    },
    {
      "word": "r"
    },
    {
      "word": "t"
    },
    {
      "word": "y"
    }
]}

let set = null;

function choose_set() {
    set = event.target.id
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
    if (set == null) {
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
    if (set == null) {
        alert("No set chosen")
        return
    }
    let game_word = data[set][Math.floor(Math.random() * data[set].length)];
    document.querySelector("#game-word").innerHTML = game_word;
}