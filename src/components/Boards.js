import React from "react";
import Squares from "./Squares";
 import "../App.scss";
const Boards = ({board,handlesquareclick})=> {


  const renderSquare = (position)=>{
    return(
      
      <Squares value={board[position]} 
      onclk={()=>handlesquareclick(position)}/>
      
    );
  }

 return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  ); 
}
export default Boards;

