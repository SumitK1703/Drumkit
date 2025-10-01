let numofd = document.querySelectorAll(".drum").length;
let sounds=["sounds/tom-1.mp3","sounds/tom-2.mp3","sounds/tom-3.mp3","sounds/tom-4.mp3","sounds/snare.mp3","sounds/crash.mp3","sounds/kick-bass.mp3"];
for (let i = 0; i < numofd; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        // alert("got clicked");
        // document.querySelectorAll(".drum")[i].style.color="white";  
        switch(i){
            case 0: let aud1= new Audio(sounds[i]).play();
            break;
            case 1: let aud2= new Audio(sounds[i]).play();
            break;
            case 2: let aud3= new Audio(sounds[i]).play();
            break;
            case 3: let aud4= new Audio(sounds[i]).play();
            break;
            case 4: let aud5= new Audio(sounds[i]).play();
            break;
            case 5: let aud6= new Audio(sounds[i]).play();
            break;
            case 6: new Audio(sounds[i]).play();
            break;
            default:
        }
    });
}
document.addEventListener("keydown", function(event) {
  switch(event.key){
            case 'w': new Audio(sounds[0]).play();
            break;
            case 'a': new Audio(sounds[1]).play();
            break;
            case 's': new Audio(sounds[2]).play();
            break;
            case 'd': new Audio(sounds[3]).play();
            break;
            case 'j': new Audio(sounds[4]).play();
            break;
            case 'k': new Audio(sounds[5]).play();
            break;
            case 'l': new Audio(sounds[6]).play();
            break;
  }
});