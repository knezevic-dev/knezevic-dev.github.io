const lightbulbSwitch = document.querySelector('#lightBulb-switch');
const lightbulbImage = document.querySelector('#lightBulb-image');

let isLightbulbOn = false;
lightbulbSwitch.addEventListener('click', function(){
    if(isLightbulbOn) {
        lightbulbImage.src = 'off.png'
        isLightbulbOn = false;
    } else {
        lightbulbImage.src = 'on.png'
        isLightbulbOn = true;
    }
    console.log(isLightbulbOn);

})