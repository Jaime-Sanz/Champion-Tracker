const myLibrary = [];

function champion(name, kills, wins, losses) {
    this.name = name;
    this.kills = kills;
    this.wins = wins;
    this.losses = losses;
}

function addChampionToLibrary() {
  let championName = document.getElementById("champion").value;
  let championKills = document.getElementById("kills").value;
  let championWins = document.getElementById("wins").value;
  let championLosses = document.getElementById("losses").value;
  let newChampion = new champion(championName, championKills, championWins, championLosses);
  myLibrary.push(newChampion);

  championDataToScreen();
}

function championDataToScreen() {
    console.log(myLibrary);
}

//function that toggles champion add pop-up visibility

const newChampion = () => {
    onScreen = document.getElementById("addui");

    if (onScreen.style.visibility === "visible") {
        onScreen.style.visibility = "hidden";
    } else {
        onScreen.style.visibility = "visible";
    }
}

//event listener that listens for submit from form to then add local data to screen
document.getElementById("new-champion").addEventListener("submit", function(event){
    event.preventDefault();
    addChampionToLibrary(); });;