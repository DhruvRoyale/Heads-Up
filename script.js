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
    let alpha = e.alpha;
    let beta = e.beta;
    let gamma = e.gamma;

    document.querySelector(".start-screen").hidden = true
    document.querySelector(".game").hidden = false

    document.querySelector("#game").innerHTML = "Alpha: " + alpha + "\n Beta: " + beta + "\n Gamma: " + gamma
}