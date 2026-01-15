///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////Naughts and Crosses Logic/////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

//Functions////////////////////////////////////////////////////////////////////////////////////

function turnTracker(){
    if(turnCounter%2==0){
        return whosGo = "X"
    }else{
        return whosGo = "O"
    }
}

function isThereaWinner(){
    if (turnCounter>=5){
    }

}

function getTopText(){
    let toDisplay = document.querySelector("h2")
    if(thereIsaWinner){
        toDisplay.textContent = `Player ${whosGo} has won!`
    }else if(turnCounter===9){
        toDisplay.textContent = `It's a draw!`
    }else{
        toDisplay.textContent = `It's player ${whosGo}'s turn`
    }
}

/// Initialise variables ////////////////////////////////////////////////////////////////////////
let turnCounter = 0
let whosGo = "X"
let thereIsaWinner = false
let currentGridInputs = document.querySelectorAll("td")
let currentGridInputsArray = Array.from(currentGridInputs).map(input=> input.textContent.trim());
console.log(currentGridInputsArray)


// Main Script //////////////////////////////////////////////////////////////////////////////////
currentGridInputs.forEach(input =>{
    //console.log(input.textContent)
    input.addEventListener('click', ()=>{
    input.textContent = whosGo
    turnCounter++
    turnTracker()
    isThereaWinner()
    getTopText()
    console.log(turnCounter)
    } 
)})



// Old code /////////////////////////////////////////////////////////////////////////////////////
//Determine if there is a winner
// function isThereaWinner(grid){
//     let win=false
//     //check for rows wins
//     for (const row in grid){
//         if (grid[row].col1 === grid[row].col2 && grid[row].col1 === grid[row].col3 && grid[row].col1 != " "){
//             return win=true
//         }
//     } //Check for collum wins
//     if((grid.row1.col1 === grid.row2.col1 && grid.row3.col1 === grid.row2.col1 && grid.row1.col1 !=" ")||(grid.row1.col2 === grid.row2.col2 && grid.row3.col2 === grid.row2.col2 && grid.row1.col2 !=" ")||(grid.row1.col3 === grid.row2.col3 && grid.row3.col3 === grid.row2.col3 && grid.row1.col3 !=" ")){
//         return win=true
//     } // Check for diagonal wins
//     else if((grid.row1.col1 === grid.row2.col2 && grid.row3.col3 === grid.row1.col1 && grid.row1.col1!=" ")||(grid.row1.col3 === grid.row2.col2 && grid.row3.col1 === grid.row1.col3 && grid.row1.col3!=" ")){
//         return win=true
//     } //set to lose if not
//     else{
//         return win=false
//     }
// }

//Help from Will. Code to extract whole rows and save results
// let row = document.querySelector("tr")
// const cells = row.cells
// const values = Array.from(cells).map(cell=> cell.textContent.trim());
// console.log(values)
// // Get cell content
// for(let cell of cells){
//     console.log(cell.textContent)
// }




