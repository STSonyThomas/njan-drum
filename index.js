// const handleClick = ()=>{
//     alert("I clicked you");
// }

for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
}

function handleClick(){
    // var audio =new Audio("sounds/tom-1.mp3");
    // audio.play();
    // console.log(this);
    // this.style.color="white";
    var controller =this.classList[0];
    makeSound(controller);
    buttonAnimation(controller);
    
}

document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            var audio =new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio =new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio =new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio =new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio =new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio =new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio =new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:console.log(key);
    }

}

function buttonAnimation(currentKey){
    var activeButton =document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    // document.addEventListener("keyup",function(event){
    //     activeButton.classList.remove("pressed");
    // })
    /**
     * this is one way of doing this but we have no control over the
     * time duration that it takes for the animation to fade out
     * so we can set a setTimeout(function,time)
     */
    setTimeout(function(){activeButton.classList.remove("pressed");},250)
}