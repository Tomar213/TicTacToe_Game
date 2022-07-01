import React,{useState} from 'react';
import "./App.scss";
import Boards from "./components/Boards";
import { calculateWinner } from './components/winnerfunc';



const  App=()=> {
  const [board , setBoard]=useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);
 const message = winner ? `The winner is ${winner} `: `Next player is ${isXNext?'X':'0'} `
  const handlesquareclick=(position)=>{
    if(board[position] || winner ){
      return ; 
    }
     setBoard(prev=>{
      return prev.map(
        (square,pos)=>{
          if (pos=== position){
            return isXNext ? 'X' : '0';
          }
          return square;
        });
      }
    );
    setIsXNext(prev => !prev);
  };

  return (
    
    <div className="app" >
        <h1>TIC TAC TOE GAME</h1>
        <h3>{message}</h3>
        <Boards board={board} handlesquareclick={handlesquareclick}/>
    </div>
    
  );
}

export default App;
