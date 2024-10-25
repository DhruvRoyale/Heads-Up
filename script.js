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