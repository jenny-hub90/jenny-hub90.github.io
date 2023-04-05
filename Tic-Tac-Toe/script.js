var ButtonRef = document.querySelectorAll(".btn");
var popRef = document.querySelector(".popup");
var newgameButton = document.getElementById("new");
var restartButton = document.getElementById("restart");
var messageRef = document.getElementById("message");
//Winning Pattern Array
var winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [2, 5, 8],
  [6, 7, 8],
  [3, 4, 5],
  [1, 4, 7],
  [0, 4, 8],
  [2, 4, 6],
];
//Player 'X' plays first
var xTurn = true;
var count = 0;

//Disable All Buttons
const disableButtons = () => {
  ButtonRef.forEach((element) => (element.disabled = true));
  //enable popup
  popRef.classList.remove("hide");
};

//Enable all buttons (For New Game and Restart)
const enableButtons = () => {
  ButtonRef.forEach((element) => {
    element.innerText = "";
    element.disabled = false;
  });
  //disable popup
  popRef.classList.add("hide");
};

//This function is executed when a player wins
const winFunction = (varter) => {
  disableButtons();
  if (varter == "X") {
    messageRef.innerHTML = "&#x1F389; <br> 'X' Wins";
  } else {
    messageRef.innerHTML = "&#x1F389; <br> 'O' Wins";
  }
  // Add cut animation to winning buttons
  for (var i of winningPattern) {
    if (
      ButtonRef[i[0]].innerText == varter &&
      ButtonRef[i[1]].innerText == varter &&
      ButtonRef[i[2]].innerText == varter
    ) {
      i.forEach((j) => ButtonRef[j].classList.add("cut-animation"));
    }
  }
};

//Function for draw
const drawFunction = () => {
  disableButtons();
  messageRef.innerHTML = "&#x1F60E; <br> It's a Draw";
};

//New Game
newgameButton.addEventListener("click", () => {
  count = 0;
  enableButtons();
});
restartButton.addEventListener("click", () => {
  count = 0;
  enableButtons();
});

//Win Logic
const winChecker = () => {
  //Loop through all win patterns
  for (var i of winningPattern) {
    var [element1, element2, element3] = [
      ButtonRef[i[0]].innerText,
      ButtonRef[i[1]].innerText,
      ButtonRef[i[2]].innerText,
    ];
    //Check if elements are filled
    //If 3 empty elements are same and would give win as would
    if (element1 != "" && (element2 != "") & (element3 != "")) {
      if (element1 == element2 && element2 == element3) {
        //If all 3 buttons have same values then pass the value to winFunction
        winFunction(element1);
      }
    }
  }
};

//Display X/O on click
ButtonRef.forEach((element) => {
  element.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      //Display X
      element.innerText = "X";
      element.disabled = true;
      //Alert message after X's turn
      window.alert("It's O's turn now!");
    } else {
      xTurn = true;
      //Display Y
      element.innerText = "O";
      element.disabled = true;
      //Alert message after O's turn
      window.alert("It's X's turn now!");
    }
    //Increment count on each click
    count += 1;
    if (count == 9) {
      drawFunction();
    }
    //Check for win on every click
    winChecker();
  });
});
//Enable Buttons and disable popup on page load
window.onload = enableButtons;
