let currMoleTile;
let currPlantTile;
let score = 0;
let gameover = false;

window.onload = function(){
    setGame();
}

function setGame(){
    //sets up the grid for the game board in html
    for(let i=0; i< 9; i++){ //i goes from 0-8 stops at < 9 
        
        //create a div tag<div></div>
        let tile = document.createElement("div");
        
        //assing each tile an id 0-8
        tile.id = i.toString();

        tile.addEventListener("click", selectTile);

        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole, 1000); //1 secs setmole is being called
    setInterval(setPlant, 2000); //2 secs setmole is being called
}

function getRandomTile(){

    //math.random return random from 0-1 * 9 = (0-9) floor round to 0-8
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole(){
    if(gameover){
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML = "";
    }
    let mole = document.createElement("img");
    mole.src = "images/monty-mole.png";

    let num = getRandomTile();
    if(currPlantTile && currMoleTile.id == num){
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameover){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img")
    plant.src = "images/piranha-plant.png";
    
    let num = getRandomTile();
    if(currMoleTile && currMoleTile.id == num){
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameover){
        return;
    }
    if(this == currMoleTile){
        score += 10;
        document.getElementById("score").innerText = score.toString();//update score
    }
    else if(this == currPlantTile){
        document.getElementById("score").innerText = "Game Over" + score.toString();
        gameover = true;
    }
}