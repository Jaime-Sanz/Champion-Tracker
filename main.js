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
    let workspace = document.getElementById("workspace");
    let championElement = document.createElement("div");
    let championName = document.createElement("h2");
    let championKills = document.createElement("div");
    let championWins = document.createElement("div");
    let championLosses = document.createElement("div");
    let championDelete = document.createElement("button");
    let newChampionForm = document.getElementById("new-champion");

    for(let i = 0; i < myLibrary.length; i++){
        let championBackground = myLibrary[i].name;
        championElement.classList = "champion-card";
        championElement.id = i;
        workspace.appendChild(championElement);

        championName.innerText = myLibrary[i].name;
        championName.classList = "champion-name"
        championElement.appendChild(championName);

        championKills.innerText = "Kills: " + myLibrary[i].kills;
        championKills.classList = "champion-kills";
        championElement.appendChild(championKills);

        championWins.innerText = "Wins: " + myLibrary[i].wins;
        championWins.classList = "champion-wins";
        championElement.appendChild(championWins);

        championLosses.innerText = "Losses: " + myLibrary[i].losses;
        championLosses.classList = "champion-losses";
        championElement.appendChild(championLosses);

        championDelete.innerText = "Delete";
        championDelete.classList = "champion-delete";
        championDelete.onclick = function(){
            workspace.removeChild(championElement);
            myLibrary.splice(i, 1);
        }
        championElement.appendChild(championDelete);

        switch(championBackground){
            case "Aurelion Sol":
                championBackground = "AurelionSol";
                break;
            case "Cho gath":
                championBackground = "Chogath";
                break;
            case "Dr Mundo":
                championBackground = "DrMundo";
                break;
            case "Jarvan IV":
                championBackground = "JarvanIV";
                break;
            case "Kog Maw":
                championBackground = "KogMaw";
                break;
            case "Master Yi":
                championBackground = "MasterYi";
                break;
            case "Miss Fortune":
                championBackground = "MissFortune";
                break;
            case "Wukong":
                championBackground = "MonkeyKing";
                break;
            case "Tahm Kench":
                championBackground = "TahmKench";
                break;
            case "Twisted Fate":
                championBackground = "TwistedFate";
            case "Xin Zhao":
                championBackground = "XinZhao";
                break;
            default:
                break;
        }

        championElement.style.backgroundImage = `url(assets/splash/${championBackground}_0.jpg)`;

    }

    newChampionForm.reset();
    newChampion();
}

//function that toggles champion add pop-up visibility

const newChampion = () => {
    let onScreen = document.getElementById("addui");
    let newChampionForm = document.getElementById("new-champion");

    if (onScreen.style.visibility === "visible") {
        onScreen.style.visibility = "hidden";
        newChampionForm.reset();
    } else {
        onScreen.style.visibility = "visible";
    }
}

//event listener that listens for submit from form to then add local data to screen
document.getElementById("new-champion").addEventListener("submit", function(event){
    event.preventDefault();
    addChampionToLibrary();});;