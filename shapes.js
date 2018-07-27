//SHAPES 
// This file contains all of the shape structers

//Squar Shape >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
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
	blockUnitTop.push(eval("row" + (rowCount - 1) + "squ" + squareCount));
	console.log("This is the top " + blockUnitTop);
	shapeFunctions();
}

//Straigth Shape >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Original 
function straightShape(){
    //Top square ******************************************************************
    blockUnit.push(eval("row" + (rowCount + 1) + "squ" + squareCount));
    blockUnitRight.push(eval("row" + (rowCount + 1) + "squ" + (squareCount - 1)));
    blockUnitLeft.push(eval("row" + (rowCount + 1) + "squ" + (squareCount + 1)));
    blockUnitTop.push(eval("row" + (rowCount + 2) + "squ" + squareCount));
    //Top middle square ***********************************************************
    blockUnit.push(eval(currentSquare));
    blockUnitRight.push(eval("row" + rowCount + "squ" + (squareCount - 1)));
    blockUnitLeft.push(eval("row" + rowCount + "squ" + (squareCount + 1)));
    //Bottom middle square ********************************************************
    blockUnit.push(eval("row" + (rowCount - 1) + "squ" + squareCount));
    blockUnitRight.push(eval("row" + (rowCount - 1) + "squ" + (squareCount - 1)));
    blockUnitLeft.push(eval("row" + (rowCount - 1) + "squ" + (squareCount + 1)));
    //Bottom square ***************************************************************
    blockUnit.push(eval("row" + (rowCount - 2) + "squ" + squareCount));
    blockUnitRight.push(eval("row" + (rowCount - 2) + "squ" + (squareCount - 1)));
    blockUnitLeft.push(eval("row" + (rowCount - 2) + "squ" + (squareCount + 1)));
    blockUnitBottom.push(eval("row" + (rowCount - 3) + "squ" + squareCount));
}

//shape 2
function straightShape2(){
    //Left square ******************************************************************
    blockUnit.push(eval("row" + rowCount + "squ" + (squareCount + 1));
    blockUnitLeft.push(eval("row" + rowCount + "squ" + (squareCount + 2)));
    blockUnitTop.push(eval("row" + (rowCount + 1) + "squ" + (squareCount + 1)));
    blockUnitBottom.push(eval("row" + (rowCount - 1) + "squ" + (squareCount + 1)));
    //Middle left square ***********************************************************
    blockUnit.push(eval(currentSquare));
    blockUnitTop.push(eval("row" + (rowCount + 1) + "squ" + squareCount));
    blockUnitBottom.push(eval("row" + (rowCount - 1) + "squ" + squareCount));
    //Middle right square ********************************************************
    blockUnit.push(eval("row" + (rowCount - 1) + "squ" + (squareCount - 1)));
    blockUnitTop.push(eval("row" + (rowCount + 1) + "squ" + (squareCount - 1)));
    blockUnitBottom.push(eval("row" + (rowCount - 1) + "squ" + (squareCount - 1)));
    //Right square ***************************************************************
    blockUnit.push(eval("row" + (rowCount - 2) + "squ" + (squareCount - 2)));
    blockUnitRight.push(eval("row" + rowCount + "squ" + (squareCount - 3)));
    blockUnitTop.push(eval("row" + (rowCount + 1) + "squ" + (squareCount - 2)));
    blockUnitBottom.push(eval("row" + (rowCount - 1) + "squ" + (squareCount - 2)));
}


//S Shape >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Original
function sShape(){
    //Right top square ************************************************************
    blockUnit.push(eval("row" + rowCount + "squ" + (squareCount - 1)));
    blockUnitTop
    blockUnitBottom
    blockUnitRight
    //Left top  square ************************************************************
    blockUnit.push(eval(currentSquare));
    blockUnitTop
    blockUnitLeft
    //Bottom right square *********************************************************
    blockUnit.push(eval("row" + (rowCount - 1) + "squ" + squareCount));
    blockUnitRight
    blockUnitBottom
    //Bottom left square **********************************************************
    blockUnit.push(eval("row" + (rowCount - 1) + "squ" + (squareCount + 1));
    blockUnitTop
    blockUnitBottom
    blockUnitLeft
}

//Shape 2


//Z Shape >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Original
function zShape(){
    //Left top  square ************************************************************
    blockUnit.push(eval("row" + rowCount + "squ" + (squareCount + 1)));
    //Right top square ************************************************************
    blockUnit.push(eval(currentSquare));
    //Bottom left square **********************************************************
    blockUnit.push(eval("row" + (rowCount - 1) + "squ" + squareCount));
    //Bottom right square *********************************************************
    blockUnit.push(eval("row" + (rowCount - 1) + "squ" + (squareCount - 1)));
}

//Shape 2

//L Shape >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Original
function lShape(){
    //Top square ******************************************************************
 
    //Middle square ***************************************************************
    blockUnit.push(eval(currentSquare));
    //Bottom square ***************************************************************
    //Bottom right square *********************************************************
}

//Shape 2

//Shape 3

//Shape 4

//BL Shape >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Original
function bLShape(){
    //Top square ******************************************************************
    
    //Middle square ***************************************************************
    blockUnit.push(eval(currentSquare));
    //Bottom square ***************************************************************
    //Bottom left square *********************************************************
}

//Shape 2

//Shape 3

//Shape 4

//lumpShape >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Original
function lumpShape(){
    //Top square ******************************************************************
    //Middle square ***************************************************************
    //Left middle square **********************************************************
    //Bottom square ***************************************************************
}

//Shape 2

//Shape 3

//Shape 4
