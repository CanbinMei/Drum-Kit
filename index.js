// This is an example for learning event listener.

// Listen to "click" event.
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {

  // Add event listener to every .drum class and listen for "click" event.
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// Listen to "keydown" event.
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Make sounds according to "click" and "keydown" event.
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      document.querySelector(".w").classList.toggle("white-text");
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      document.querySelector(".a").classList.toggle("white-text");
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      document.querySelector(".s").classList.toggle("white-text");
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      document.querySelector(".d").classList.toggle("white-text");
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      document.querySelector(".j").classList.toggle("white-text");
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      document.querySelector(".k").classList.toggle("white-text");
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      document.querySelector(".l").classList.toggle("white-text");
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {

  // Choose the class of button: w, a, s, d, j, k, l.
  var activeButton = document.querySelector("." + currentKey);

  // Add CSS effect.
  activeButton.classList.add("pressed");

  // Delay 100ms then remove the .pressed CSS class.
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
