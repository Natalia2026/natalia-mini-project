///////////////////////////////////////////////////////////////////////////
/////////////////////Naughts and Crosses Logic/////////////////////////////
///////////////////////////////////////////////////////////////////////////

//Functions////////////////////////////////////////////////////////////////

//Determine if there is a winner
function isThereaWinner(grid){
    let win=false
    //check for rows wins
    for (const row in grid){
        if (grid[row].col1 === grid[row].col2 && grid[row].col1 === grid[row].col3 && grid[row].col1 != " "){
            return win=true
        }
    } //Check for collum wins
    if((grid.row1.col1 === grid.row2.col1 && grid.row3.col1 === grid.row2.col1 && grid.row1.col1 !=" ")||(grid.row1.col2 === grid.row2.col2 && grid.row3.col2 === grid.row2.col2 && grid.row1.col2 !=" ")||(grid.row1.col3 === grid.row2.col3 && grid.row3.col3 === grid.row2.col3 && grid.row1.col3 !=" ")){
        return win=true
    } // Check for diagonal wins
    else if((grid.row1.col1 === grid.row2.col2 && grid.row3.col3 === grid.row1.col1 && grid.row1.col1!=" ")||(grid.row1.col3 === grid.row2.col2 && grid.row3.col1 === grid.row1.col3 && grid.row1.col3!=" ")){
        return win=true
    } //set to lose if not
    else{
        return win=false
    }
}

function addNaughtOrCross(row.col){

}


//Define variables ///////////////////////////////////////////////////////

//Define object to store current values
let currentGridObject = {
    row1: {col1:" ", col2:" ", col3:" "},
    row2: {col1:" ", col2:" ", col3:" "},
    row3: {col1:" ", col2:" ", col3:" "}
}
//console.log(currentGridObject)




//tests
let testGrid = {
    row1: {col1:" ", col2:" ", col3:" "},
    row2: {col1:" ", col2:" ", col3:" "},
    row3: {col1:" ", col2:" ", col3:" "}
}
console.log(isThereaWinner(testGrid))

