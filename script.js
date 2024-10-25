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
    let gamma = e.gamma;

    document.querySelector(".start-screen").hidden = true
    document.querySelector(".game").hidden = false

    document.querySelector("#game").innerHTML = gamma

    /* if (type.includes("landscape")) {
        document.querySelector(".start-screen").hidden = true;
        document.querySelector(".landscape-request").hidden = true;
        document.querySelector(".game").hidden = false;
    } else {
        document.querySelector(".start-screen").hidden = true;
        document.querySelector(".landscape-request").hidden = false;
        document.querySelector(".game").hidden = true;
    } */
}