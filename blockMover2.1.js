var allSquareArry = [];
var arrySquareNumber = 0;
var arryColumNumber = 1; 
var arryRowNumber = 1;
var htmlElementSquare = 0;

function arryBoardKeeper(){
	for(var i = 0; i < 180; i++){
		if(arryColumNumber === 11){
			arryColumNumber = 1;
			arryRowNumber ++;
				addUpArrySquare(); 
			}
		else{
				addUpArrySquare();
			}
		}		
}

function addUpArrySquare(){
	arrySquareNumber = document.getElementById("row" + arryRowNumber + "squ" + arryColumNumber);
	arryColumNumber ++;
	allSquareArry.push(arrySquareNumber);	
}


var go = false;
var countUpTheSquare = false
//Start Button*********************************************************************************************************************
var startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function(){
	if(countUpTheSquare === false){
		arryBoardKeeper();	
		console.log("All Borad Squares " + allSquareArry);	
		boardKeeper();
		// pickSquare();
		countUpTheSquare = true; 
	}	
	pauseGame();
	gameCounter();

})

function pauseGame(){
	if(go === true){
		startBtn.textContent = "Start";
		go = false;
	}
	else{
		startBtn.textContent = "Pause";
		go = true;
	}
}

function gameCounter(){
	if(go === true){
		setTimeout(addRow, 500);
	}
}


function addRow(){
	if(rowCount === 18 || allBoardSquare.includes(bottomSideSquare) == false){
		rightSideSquare = row1squ6;
		leftSideSquare = row1squ4;
		bottomSideSquare = row2squ5;
		squareCount = 5;
		rowCount = 1;	
		// pickSquare();

	}	
	if(rowCount <= 18){
		downMove();
		// checkLeftSide();
		// checkRightSide();
		squareShape()
		gameCounter();		
	}
}

// var randomNumber = 0;

// function pickSquare(){
// 	randomNumber = Math.floor(Math.random() * 300);
// 	console.log("Random Number is " + randomNumber);
// 	shape();
// 	console.log(pickedShape);
// }

//Places all non-occupied squares into an arrey************************************************************************************

var allBoardSquare = [];
var boardSquareNumber = 0;
var columNumber = 1; 
var rowNumber = 1;

function boardKeeper(){
	for(var i = 0; i < 180; i++){
		if(columNumber === 11){
			columNumber = 1;
			rowNumber ++;
				addUpBoardSquare(); 
			}
		else{
				addUpBoardSquare();
			}
		// console.log("All Borad Squares " + allBoardSquare);
		}		
}

function addUpBoardSquare(){
	boardSquareNumber = ("row" + rowNumber + "squ" + columNumber);
	columNumber ++
	allBoardSquare.push(boardSquareNumber);	
}

//**************************************************************************************************************************************

var restartBtn = document.getElementById("restartBtn");

restartBtn.addEventListener("click", restGame());

function restGame(){
	countUpTheSquare = false;
}

var currentSquare = row1squ5;
var perviousSquare = 0 
var rightSideSquare = row1squ6;
var leftSideSquare = row1squ4;
var bottomSideSquare = row2squ5;
var squareCount = 5
var rowCount = 1
var runNumber = 0;


//Movements*************************************************************************************************************
//Right Arow***********************************************************************************************************

var moveRight = false;

function rightMove(){
	if(allBoardSquare.includes(rightSideSquare) == true){
		// testSquare();
		if(squareCount > 1){
			squareCount --;
			}
			// checkRightSide();			
		}
		// clearPerviousRight();	
		movementCase();	
		moveRight = true; 
		squareShape()
		moveRight = false;
	}		


// function clearPerviousRight(){
// 	perviousSquare = "row" + rowCount + "squ" + (squareCount + 1);
// 	console.log("Pervious Square " + perviousSquare); 	
// 	perviousSquare = eval(perviousSquare);

// }

// function checkRightSide(){
// 	rightSideSquare = "row" + rowCount + "squ" + (squareCount - 1);	
// 	console.log("Right Square    " + rightSideSquare);
// 	rightSideSquare = eval(rightSideSquare);	
// }

//Left Arow***********************************************************************************************************

var moveLeft = false;

function leftMove(){
	if(allBoardSquare.includes(leftSideSquare) == true){
		// testSquare();
		if(squareCount < 10){
			squareCount ++;
			}
			// checkLeftSide();	
		}
		// clearPerviousLeft();
		movementCase();	
		// runNumber = 2;
		moveLeft = true;
		squareShape()
		moveLeft = false;
	}	

// function clearPerviousLeft(){
// 	perviousSquare = "row" + rowCount + "squ" + (squareCount - 1);
// 	console.log("Pervious Square " + perviousSquare);	
// 	perviousSquare = eval(perviousSquare);

// function checkLeftSide(){
// 	leftSideSquare = "row" + rowCount + "squ" + (squareCount + 1);
// 	console.log("Left Side       " + leftSideSquare);	
// 	leftSideSquare = eval(leftSideSquare);	
// }

//Down Arow***********************************************************************************************************

var moveDown = false;

function downMove(){
	console.log("Move Down Is Active");
	if(allBoardSquare.includes(bottomSideSquare) == true){
		// testSquare();
		if(rowCount < 18){
			rowCount ++;		
		}	
		// clearPerviousDown();
		// checkBottomSide();
		movementCase();
		// runNumber = 3;
		moveDown = true;
		squareShape()	
		moveDown = false;	
	}			
}

// function clearPerviousDown(){
// 	perviousSquare = "row" + (rowCount - 1) + "squ" + squareCount;
// 	console.log("Pervious Square " + perviousSquare); 	
// 	perviousSquare = eval(perviousSquare);
// }

// function checkBottomSide(){
// 	bottomSideSquare = "row" + (rowCount + 1) + "squ" + squareCount;
// 	console.log("Bottom Side     " + bottomSideSquare);		
// 	bottomSideSquare = eval(bottomSideSquare);	
// }


//Moment Functions *****************************************************************************************************

function movementCase(){
	boardMovement();
	// colorSquare();
	// uncolorSquare();
}

// var indexOfCurrentSquare = 0;

// function colorSquare(){
// 	currentSquare.classList.toggle("squareWhite");	
// 	indexOfCurrentSquare = allBoardSquare.indexOf(currentSquare);
// 	allBoardSquare.splice(indexOfCurrentSquare, 1);
// }

// function uncolorSquare(){
// 	perviousSquare.classList.remove("squareWhite");
// 	allBoardSquare.push(perviousSquare);	
// }

function boardMovement(){
	currentSquare = "row" + rowCount + "squ" + squareCount;
	console.log("Current Square  " + currentSquare);	
	currentSquare = eval(currentSquare);
}

function upMove(){}


//Shapes***************************************************************************************************************

// var pickedShape = 0;

// function shape(){
// 	if(randomNumber <= 100){
// 		pickedShape = zShape;
// 	}
// 	if(randomNumber >= 101 && randomNumber <= 200){
// 		pickedShape = sShape;
// 	}
// 	if(randomNumber >= 201){
// 		pickedShape = squareShape;
// 	}
// }

function zShape(){
	blockUnit.push(eval("row" + (rowCount - 1) + "squ" + (squareCount + 1)));
	blockUnit.push(eval("row" + (rowCount - 1) + "squ" + squareCount));
	blockUnit.push(eval("row" + rowCount + "squ" + (squareCount - 1)));
	shapeFunctions();	
}

function sShape(){
	blockUnit.push(eval("row" + (rowCount - 1) + "squ" + (squareCount - 1)));
	blockUnit.push(eval("row" + (rowCount - 1) + "squ" + squareCount));
	blockUnit.push(eval("row" + rowCount + "squ" + (squareCount + 1)));
	shapeFunctions();	
}

function squareShape(){
	//Bottom left square *********************************************************
	blockUnit.push(eval("row" + (rowCount - 1) + "squ" + (squareCount + 1)));
	blockUnitBottom.push(eval("row" + (rowCount - 2) + "squ" + (squareCount + 1)));
	blockUnitLeft.push(eval("row" + (rowCount - 1) + "squ" + (squareCount + 2)));
	//Bottom right square ********************************************************
	blockUnit.push(eval("row" + (rowCount - 1) + "squ" + squareCount));
	blockUnitBottom.push(eval("row" + (rowCount - 2) + "squ" + squareCount));
	blockUnitRight.push(eval("row" + (rowCount - 1) + "squ" + (squareCount - 1)));
	//left square ***************************************************************
	blockUnit.push(eval("row" + rowCount + "squ" + (squareCount + 1)));
	blockUnitLeft.push(eval("row" + rowCount + "squ" + (squareCount + 2)));
	blockUnitTop.push(eval("row" + (rowCount - 1) + "squ" + (squareCount + 1)));
	//right square ***************************************************************
	blockUnit.push(eval(currentSquare));
	blockUnitRight.push(eval("row" + rowCount + "squ" + (squareCount - 1)));
	blockUnitTop.push(eval("row" + (rowCount - 1) + "squ" + (squareCount - 1)));
	console.log("This is the top " + blockUnitTop);
	shapeFunctions();
}

// Shape Funtions *********************************************************************

var blockUnitLeft = [];
var blockUnitRight = [];
var blockUnitBottom = [];
var blockUnitTop = [];
var blockUnit = [];

function shapeFunctions(){
	testBlockUnit();
	if(moveRight == true){		
		if(rightSideIsBlocked == false){ 
			createRightPrevious();
			clearBlockUnit();
			colorRightBlockUnits();
			colorBlockUnit();
		}
		else{
			currentSquare = eval("row" + rowCount + "squ" + (squareCount + 1));
		}
	}
	if(moveLeft == true){
		if(leftSideIsBlocked == false){
			createLeftPrevious();
			clearBlockUnit();
			colorLeftBlockUnits();
			colorBlockUnit();
		}
		else{
			currentSquare = eval("row" + rowCount + "squ" + (squareCount - 1));
		}
	}
	if(moveDown == true){
		if(bottomSidedIsBlocked == false){
			createBottomPrevious();
			clearBlockUnit();
			colorBottomBlockUnits();
			colorBlockUnit();
		}
		else{
			currentSquare = eval("row1squ5");
		}
	}
}

//Clear Block Units********************************************************************************

var perviousSquareUnits = [];
var perviousUnit = 0;
var blockUnitRightPrevious = [];
var blockUnitLeftPrevious = [];
var blockUnitTopPrevious = [];

function createRightPrevious(){
	for(var i = 0; i < blockUnitLeftPrevious.length; i++){
		perviousUnit = blockUnitLeftPrevious.pop();
		perviousSquareUnits.push(perviousUnit);
	}
}

function createLeftPrevious(){
	for(var i = 0; i < blockUnitRightPrevious.length; i++){
		perviousUnit = blockUnitRightPrevious.pop();
		perviousSquareUnits.push(perviousUnit);
	}
}

function createBottomPrevious(){
	for(var i = 0; i < blockUnitTopPrevious.length; i++){
		perviousUnit = blockUnitTopPrevious.pop();
		perviousSquareUnits.push(perviousUnit);
		console.log("Pervious Square Units " + perviousSquareUnits);
	}
}

function clearBlockUnit(){
	for(var i = 0; i < perviousSquareUnits.length; i++){
		perviousUnit = perviousSquareUnits.pop();
		console.log("This is the previous Units " + perviousUnit);
		if(perviousUnit.classList.contains("squareWhite") == true){
			perviousUnit.classList.remove("squareWhite");
			allBoardSquare.push(perviousUnit);			
		}		
	}	
}

//Color Block Units***************************************************************************

var colorRightSquare = [];
var colorLeftSquare = [];
var colorBottomSquare = [];
var colorSquareUnit = [];
var color = 0; 

function colorLeftBlockUnits(){
	for(var i = 0; i < colorLeftSquare.length; i++){
		color = colorLeftSquare.pop();
		colorSquareUnit.push(color);
	}	
}

function colorRightBlockUnits(){
	for(var i = 0; i < colorRightSquare.length; i++){
		color = colorRightSquare.pop();
		colorSquareUnit.push(color);
	}
}

function colorBottomBlockUnits(){
	for(var i = 0; i < colorBottomSquare.length; i++){
		color = colorBottomSquare.pop();
		colorSquareUnit.push(color);
	}
}

var currentColorUnit = 0;
var indexOfCurrentColorSquare = 0;

function colorBlockUnit(){
	for(var i = 0; i < colorSquareUnit.length; i++){
		currentColorUnit = colorSquareUnit.pop();
		currentColorUnit.classList.toggle("squareWhite");
		indexOfCurrentColorSquare = allBoardSquare.indexOf(currentColorUnit);
		allBoardSquare.splice(indexOfCurrentColorSquare, 1);
		console.log("Color Block Unit is Working");
	}
}

//Test Block Unit ***************************************************************************

var rightSideIsBlocked = false;
var leftSideIsBlocked = false;
var bottomSidedIsBlocked = false
var top = 0;
var right = 0;
var left = 0;
var bottom = 0;

function testBlockUnit(){
	for(var i = 0; i < blockUnitRight.length; i++){
		right = blockUnitRight.pop();
		if(allBoardSquare.includes(right) == false){
			rightSideIsBlocked = true;
		}
		if(moveLeft == true){
			blockUnitRightPrevious.push(right);
			console.log("Block Unit Right Previous " + blockUnitRightPrevious);
		}
		if(moveRight == true){
			colorRightSquare.push(right);
			console.log("Color Right Squares " + colorRightSquare);
		}
	}
	for(var i = 0; i < blockUnitLeft.length; i++){
		left = blockUnitLeft.pop();
		if(allBoardSquare.includes(left) == false){
			leftSideIsBlocked = true;
		}
		if(moveRight == true){
			blockUnitLeftPrevious.push(left);
			console.log("Block Unit Left Previous " + blockUnitLeftPrevious);
		}
		if(moveLeft == true){
			colorLeftSquare.push(left);
			console.log("Color Left Squares " + colorLeftSquare);
		}
	}
	for(var i = 0; i < blockUnitBottom.length; i++){
		bottom = blockUnitBottom.pop();
		if(allBoardSquare.includes(bottom) == false){
			BottomSideIsBlocked = true;
		}
		if(moveDown == true){
			colorBottomSquare.push(bottom);
			console.log("Color Bottom Squares " + colorBottomSquare);
		}
	}
	for(var i = 0; i < blockUnitTop.length; i++)
		top = blockUnitTop.pop();
		console.log("Top " + top);
		if(moveDown == true){
			blockUnitTopPrevious.push(top);
			console.log("Block Unit Top Previous " + blockUnitTopPrevious);
		}	
}

//*****************************************************************************************************************************************************

function print_arrow_key(keyCodeNumber) {

    var key_arrow_or_other = document.getElementById('key_arrow_or_other'),
        LEFT = 37,
        UP = 38,
        RIGHT = 39,
        DOWN = 40;

    switch (keyCodeNumber) {
    case LEFT:
        key_arrow_or_other = leftMove();
        break;
    case UP:
        key_arrow_or_other = upMove();
        break;
    case RIGHT:
        key_arrow_or_other = rightMove();
        break;
    case DOWN:
        key_arrow_or_other = downMove();
        break;
    }

}

function checkKeycode(event) {

    var keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keyCode;

    print_arrow_key(keycode);

    return false;
}

document.onkeydown = checkKeycode;

//*******************************************************************************************************************