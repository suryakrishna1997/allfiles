// // JavaScript logic for updating scores, freezing teams, displaying the winner, resetting scores, and coin toss
// let team1Score = 0;
// let team2Score = 0;
// let isTeam1Frozen = false;
// let isTeam2Frozen = false;

// function updateScore(team, runs) {
//   if (team === "team1" && !isTeam1Frozen) {
//     enableButtons("team1");
//     disableButtons("team2");
//     team1Score += runs;
//     document.getElementById("team1Score").innerText = team1Score;
//   } else if (team === "team2" && !isTeam2Frozen) {
//     enableButtons("team2");
//     disableButtons("team1");
//     team2Score += runs;
//     document.getElementById("team2Score").innerText = team2Score;
//   }
// }

// function freezeTeam(team) {
//   if (team === "team1") {
//     isTeam1Frozen = true;
//     document.getElementById("freezeTeam1Button").disabled = true;
//     document.getElementById(
//       "finalScores"
//     ).innerText = `(Team 1) Final Score : ${team1Score}`;
//   } else if (team === "team2") {
//     isTeam2Frozen = true;
//     document.getElementById("freezeTeam2Button").disabled = true;
//     document.getElementById(
//       "finalScores"
//     ).innerText = `Final Score (Team 2): ${team2Score}`;
//   }
// }

// function displayWinner() {
//   let winner = "";
//   let runnerUp = "";

//   if (team1Score > team2Score) {
//     winner = `<h1 class='winner-text'>Team 1 Wins and the Score is ${team1Score}!</h1>`;
//     runnerUp = `<p> (Team 2) Runner-up Score : ${team2Score}</p>`;
//   } else if (team2Score > team1Score) {
//     winner = `<h1 class='winner-text'>Team 2 Wins and the Score is ${team2Score}!</h1>`;
//     runnerUp = `<p>(Team 1) Runner-up Score: ${team1Score}</p>`;
//   } else {
//     winner = "<h1 class='winner-text'>It's a Tie!</h1>";
//     runnerUp = `<p>Both teams have the same score: ${team1Score}</p>`;
//   }

//   //   document.getElementById("winner").innerHTML = winner;
//   document.getElementById("finalScores").innerHTML = `${runnerUp}<br>${winner}`;

//   // Reset scores to zero after displaying the winner
//   team1Score = 0;
//   team2Score = 0;
//   document.getElementById("team1Score").innerText = team1Score;
//   document.getElementById("team2Score").innerText = team2Score;

//   // Enable the freeze buttons for both teams
//   isTeam1Frozen = false;
//   isTeam2Frozen = false;
//   document.getElementById("freezeTeam1Button").disabled = false;
//   document.getElementById("freezeTeam2Button").disabled = false;

//   // Disable the Display Winner button after displaying the winner
//   document.getElementById("displayWinnerButton").disabled = true;

//   // Reload the page after 5 seconds
//   setTimeout(() => {
//     location.reload();
//   }, 5000);
// }
// function enableButtons(team) {
//   const buttons = document.querySelectorAll(`.${team} button.custom-button`);
//   buttons.forEach((button) => {
//     button.disabled = false;
//   });
// }

// function disableButtons(team) {
//   const buttons = document.querySelectorAll(`.${team} button.custom-button`);
//   buttons.forEach((button) => {
//     button.disabled = true;
//   });
// }

// function tossCoin() {
//   const result = Math.random() < 0.5 ? "Heads" : "Tails";
//   const coinTossResultElement = document.getElementById("coinTossResult");

//   coinTossResultElement.innerText = `Coin Toss Result: ${result}`;

//   // Clear the result after 3 seconds
//   setTimeout(() => {
//     coinTossResultElement.innerText = "";
//   }, 3000);
// }

// function refreshPage() {
//   location.reload();
// }
