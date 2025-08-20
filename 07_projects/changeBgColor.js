//generate a random color
const randomColor = function(){
    const hex = '012345689ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervaiId;
const startChangingColor = function () {
    if(!intervaiId){
        intervaiId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function () {
    clearInterval(intervaiId)
    intervaiId = null
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);