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
let game_score = 0;

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

window.addEventListener("devicemotion", motion_check)

function motion_check(motion) {
    let alpha = motion.rotationRate.alpha;
    let beta = motion.rotationRate.beta;
    let gamma = motion.rotationRate.gamma;

    document.querySelector("#motion").innerHTML = "Motion = Alpha: " + alpha + "\n Beta: " + beta + "\n Gamma: " + gamma;

    window.addEventListener("deviceorientation", orientation_check)
}

function orientation_check(orientation) {
    if (set == null) {
        display_screen("game-select")
        return
    }

    let alpha = orientation.alpha;
    let beta = orientation.beta;
    let gamma = orientation.gamma;

    document.querySelector("#orientation").innerHTML = "Orientation = Alpha: " + alpha + "\n Beta: " + beta + "\n Gamma: " + gamma;

    if (Math.abs(gamma) >= 50 && (Math.abs(beta) <= 25 || Math.abs(beta) >= 155)) {
        display_screen("game")
    } else {
        display_screen("landscape-request")
    }
}

function run_game() {
    if (set == null) {
        alert("No set chosen")
        return
    }
    let game_word = data[set][Math.floor(Math.random() * data[set].length)]["word"];
    document.querySelector("#game-word").innerHTML = game_word;
}

function reset() {
    set = null;
    orientation_check();
}

function correct() {
    display_screen("correct")

    game_score += 1;
    setTimeout(display_screen("game"), 1000)

    run_game()
}

function incorrect() {
    display_screen("incorrect")

    setTimeout(display_screen("game"), 1000)

    run_game()
}

function display_screen(screen) {
    let screens = ["start-screen", "game-select", "landscape-request", "game", "correct", "wrong"]
    
    for (let i = 0; i < screens.length; i++) {
        if (screens[i] == screen) {
            document.querySelector("." + screens[i]).hidden = false;
        } else {
            document.querySelector("." + screens[i]).hidden = true;
        }
    }
}