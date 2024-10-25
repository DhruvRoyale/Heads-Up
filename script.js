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

    document.querySelector('#test-2').innerHTML = "Type: " + type + "\n Angle: " + angle;
})