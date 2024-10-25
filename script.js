function requestOrientationPermission(){
    DeviceOrientationEvent.requestPermission()
    .then(response => {
        if (response == 'granted') {
            screen.orientation.addEventListener("change", (e) => {
                let type = e.target.type;
                let angle = e.target.angle;

                document.querySelector('#test').innerHTML = "Type: " + type + "\n Angle: " + angle;
            })
        }
    })
    .catch(console.error)
}