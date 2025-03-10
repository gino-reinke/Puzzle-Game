function swapTiles(cell1, cell2) {
	var temp = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temp;
}

function shuffle() {
	//Use nested loops to access each cell of the 3x3 grid
	for(var row=1; row <=3; row++) //foreach row of the 3x3 grid
	{
		// for each column in this row
		for (var column=1; column <=4; column++) {
			// pick a random row from 1 to 4
			var row2=Math.floor(Math.random()*4+1);
			// pick a random column from 1 to 4
			var column2=Math.floor(Math.random()*4+1);
            // swap the look & feel of both cells
			swapTiles("cell"+row+column, "cell"+row2+column2); 
		}
	}
}

function clickTile(row, column) {
	var cell = document.getElementById("cell"+row+column);
	var tile = cell.className;
	
	if(tile!="tile16") {
		// check if the white tile is on the right
		if(column < 4) {
			if(document.getElementById("cell"+row+(column+1)).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+row+(column+1));
				return;
			}
		}
		// check if the white tile is on the left
		if(column > 1) {
			if(document.getElementById("cell"+row+(column-1)).className=="tile16") {
				swapTiles("cell"+row+column,"cell"+row+(column-1));
				return;
			}
		}
		// check if the white tile is above
		if(row > 1) {
			if(document.getElementById("cell"+(row-1)+column).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+(row-1)+column);
				return;
			}
		}
		// check if the white tile is below
		if(row < 4) {
			if(document.getElementById("cell"+(row+1)+column).className=="tile16") {
				swapTiles("cell"+row+column, "cell"+(row+1)+column);
				return;
			}
		}
	}
}


function checkWin() {
    var correctOrder = [
        "tile1", "tile2", "tile3", "tile4",
        "tile5", "tile6", "tile7", "tile8",
        "tile9", "tile10", "tile11", "tile12",
        "tile13", "tile14", "tile15", "tile16"
    ];

    for (var row = 1; row <= 4; row++) {
        for (var column = 1; column <= 4; column++) {
            var cell = document.getElementById("cell" + row + column);
            if (cell.className !== correctOrder[(row - 1) * 4 + (column - 1)]) {
                return false; // If any tile is out of place, return false
            }
        }
    }
    return true; // If all tiles are in place, return true
}

// Show popup when the player wins
function showWinPopup() {
    var popup = document.getElementById("winPopup");
    popup.style.display = "block";
}

// Close the popup when clicked
function closePopup() {
    document.getElementById("winPopup").style.display = "none";
}

// Shuffle the puzzle automatically when the page loads
window.onload = function() {
    shuffle();
};