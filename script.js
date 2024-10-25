function requestOrientationPermission(){
    DeviceOrientationEvent.requestPermission()
    .then(response => {
        if (response == 'granted') {
            window.addEventListener('deviceorientation', (e) => {
                document.querySelector('#test').innerHTML = e;
            })
        }
    })
    .catch(console.error)
}

screen.orientation.addEventListener("change", (e) => {
    let type = e.target.type;
    let angle = e.target.angle;

    if (type.includes("landscape")) {
        document.querySelector(".start-screen").hidden = true;
        document.querySelector(".landscape-request").hidden = true;
        document.querySelector(".game").hidden = false;
    } else {
        document.querySelector(".start-screen").hidden = true;
        document.querySelector(".landscape-request").hidden = false;
        document.querySelector(".game").hidden = true;
    }
})