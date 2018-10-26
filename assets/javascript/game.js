
// makes sure that everything is loaded before event listeners added - always include.
$(document).ready(function() {
  // sound bites
var garnetSound = new Audio('assets/sounds/Garnet-sound.m4a')
var pearlSound = new Audio('assets/sounds/Pearl-sound.m4a')
var amethystSound = new Audio('assets/sounds/Amethyst-sound.m4a')
var stevenSound = new Audio('assets/sounds/Steven-sound.m4a')
var themeSong = new Audio('assets/sounds/theme-song.mp3')

var confirmSong = function() {
  confirm("You will be given a random number at the start of the game. There are four Crystal Gems below. By clicking on a Crystal Gem you will add a specific amount of points to your total score. You win the game by matching your total score to random number, you lose the game if your total score goes above the random number. The value of each Crystal Gem is hidden from you until you click on it. Each time when the game starts, the game will change the values of each Crystal Gem.")
}

// alert function with game instructions
var instructAlert = function() {
  themeSong.play();
  confirmSong();
  if (confirmSong === true) {
    themeSong.pause();
  } else {
    themeSong.pause();
  }
  }


// setTimeout function that makes the alert happen 0.05 seconds after DOM is loaded
var windowAlert = setTimeout(instructAlert,1000);

// variables set to 0
  var winsScore = 0;
  var lossScore = 0;
  var targetScore = 0;
  var currentScore = 0;
  // assigns the function to character variables
  var stevenNum ;
  var garnetNum;
  var pearlNum;
  var amethystNum;




// checkWin function that makes the game happen
function checkWin() {
  if (currentScore > targetScore) {
    $(".col-md-4").removeClass("col-md-4 pb-5").addClass("col-md-3 pb-5")
    $(".new-div").addClass("col-md-3 pb-5")
    $(".new-div").html('<div class="card text-white bg-success mb-3 border border-white d-md-block mx-auto" style="max-width: 14rem;"> <div class="card-header font-weight-bold shadow-lg text-center">LOSER</div> <div class="card-body"> <h5 class="card-title text-center">You Lost!</h5></div></div>')

    // $("#you-win-lose").html('You lost!');
    lossScore++;

    $("#loss-number").text(lossScore);
    initialize();


  } else if (currentScore === targetScore) {
    $(".col-md-4").removeClass("col-md-4 pb-5").addClass("col-md-3 pb-5")
    $(".new-div").addClass("col-md-3 pb-5")
    $(".new-div").html('<div class="card text-white bg-success mb-3 border border-white d-md-block mx-auto" style="max-width: 14rem;"><div class="card-header font-weight-bold shadow-lg text-center">WINNER</div><div class="card-body"><h5 class="card-title text-center">You won!</h5></div></div>')
    // $("#you-win-lose").html('You won!');
    winsScore++;
    $("#wins-number").text(winsScore);
    initialize();

  }
}

// gets a random # between 19-120
// Math.floor(Math.random() * (max-min + 1) + min)
function getTargetScore() {
  return Math.floor(Math.random() * 102) + 19;
};



// initializer function
var initialize = function() {

  currentScore = 0;
  targetScore = getTargetScore();
  //Reset character numbers
    stevenNum = getCharacterNumber();
    garnetNum = getCharacterNumber();
    pearlNum = getCharacterNumber();
    amethystNum = getCharacterNumber();

  $("#target-number").text(targetScore);
  $("#current-number").text(currentScore);

};



// function chooses a random # between 1-12
function getCharacterNumber() {
  return Math.floor(Math.random() * 13) + 1;
}




// on click function1
$("#steven").on("click", function() {
  stevenSound.play();
  console.log("Steven clicked");
  currentScore += stevenNum;
  $("#current-number").text(currentScore);
  checkWin();

});

// on click function2
$("#garnet").on("click", function() {
  garnetSound.play();
  console.log("Garnet clicked")
  currentScore += garnetNum
  $("#current-number").text(currentScore);
  checkWin();

});

// on click function3
$("#pearl").on("click", function() {
  pearlSound.play();
  console.log("Pearl clicked")
  currentScore += pearlNum
  $("#current-number").text(currentScore);
  checkWin();

});

// on click function4
$("#amethyst").on("click", function() {
  amethystSound.play();
  console.log("Amethyst clicked")
  currentScore += amethystNum
  $("#current-number").text(currentScore);
  checkWin();

})


// runs the initializer
initialize();

});
