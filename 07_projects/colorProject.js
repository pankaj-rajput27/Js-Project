const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        const color = e.target.id;

        if(color === 'grey'){
            body.style.backgroundColor = color;
            body.style.color = 'white'; 
        } else {
            body.style.backgroundColor = color;
            body.style.color = 'black'; 
        }
    });
});
