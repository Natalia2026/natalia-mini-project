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

function whoHasWon(){
    if(turnCounter%2==0){
        return whosWin = "O"
    }else{
        return whosWin = "X"
    }
}



function isThereaWinner(){
    // not enough turns
    //if (turnCounter>=winSize*2-1){
        //rows
        for(i in modulos){
            console.log(modulos[i])
            console.log(currentGridInputsArray)
            console.log(currentGridInputsArray[currentIdNum+1])
            if(currentIdNum%gridSize===modulos[i] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum+moduloChecks[moduloChecks.length-i-1]] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[moduloChecks.length-i-2]){
                thereIsaWinner=true
                whoHasWon()
                }
            }
        
        //Collums
        for(j in maxes){
            if(Math.trunc(currentIdNum/gridSize)==modulos[i] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum+maxChecks[maxChecks.length-i-1]] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum+maxChecks[maxChecks.length-i-1]]){
                thereIsaWinner=true
                whoHasWon()
            }
        } 
        //Diagonal
        //3n+1
        //if((currentIdNum === 0 || currentIdNum === 4 || currentIdNum === 8)&&(currentGridInputsArray))
    
}





function getTopText(){
    let toDisplay = document.querySelector("h2")
    if(thereIsaWinner){
        toDisplay.textContent = `Player ${whosWin} has won! Refresh the page to play again.`
    }else if(turnCounter===9){
        toDisplay.textContent = `It's a draw!`
    }else{
        toDisplay.textContent = `It's player ${whosGo}'s turn`
    }
}

/// Initialise variables ////////////////////////////////////////////////////////////////////////
let turnCounter = 0
let whosGo = "X"
let whosWin = " "
let thereIsaWinner = false
let currentGridInputs = document.querySelectorAll("td")
let currentGridInputsArray = new Array(9)
console.log(currentGridInputsArray)
let currentIdStr = " "
let currentIdNum = NaN
let gridSize=3
let winSize=3

const modulos = Array.from({length:gridSize},(element, index) => index)
const moduloChecks = (Array.from({length:(winSize-1)},(element, index) => -(index+1)).reverse().concat((Array.from({length:(winSize-1)},(element, index) => (index+1)))))
const maxes = Array.from({length:gridSize},(element, index) => (index+1)*gridSize-1)
const maxChecks = moduloChecks.map(check => check*gridSize)



// Main Script //////////////////////////////////////////////////////////////////////////////////
currentGridInputs.forEach(input =>{
    //console.log(input.textContent)
    input.addEventListener('click', ()=>{
        if(!input.textContent){
            input.textContent = whosGo
            currentIdStr=input.id
            currentIdNum=Number(currentIdStr)
            currentGridInputsArray[currentIdNum] = whosGo
            console.log(currentGridInputsArray)
            turnCounter++
            turnTracker()
            isThereaWinner()
            getTopText()
            console.log(turnCounter)
        } 
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

//let currentGridInputsArray = Array.from(currentGridInputs).map(input=> input.textContent.trim());


// function isThereaWinner(){
//     // not enough turns
//     if (turnCounter>=5){
//         //rows
//         if(currentIdNum%3===0 && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum+1] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum+2]){
//             thereIsaWinner=true
//             whoHasWon()
//         }else if(currentIdNum%3===1 &&currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum+1] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum-1]){
//             thereIsaWinner=true
//             whoHasWon()
//         }else if(currentIdNum%3===2 &&currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum-1] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum-2]){
//             thereIsaWinner=true
//             whoHasWon()
//         }
//         //Collums
//         if(currentIdNum<=2 && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum+3] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum+6]){
//             thereIsaWinner=true
//             whoHasWon()
//         }else if(currentIdNum<=5 &&currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum-3] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum+3]){
//             thereIsaWinner=true
//             whoHasWon()
//         }else if(currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum-3] && currentGridInputsArray[currentIdNum]===currentGridInputsArray[currentIdNum-6]){
//             thereIsaWinner=true
//             whoHasWon()
//         }
//         //Diagonal
//         //3n+1
//         //if((currentIdNum === 0 || currentIdNum === 4 || currentIdNum === 8)&&(currentGridInputsArray))
//     }
    
// }

