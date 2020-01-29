import React from 'react';

const PlayAgain = (props) => (
    <div className="game-done" style={{marginTop: 5}}>
      <div 
        className="message"
        style={{color: props.gameStatus === 'lost' ? 'red' : 'green'}}
        >
        {props.gameStatus === 'lost' ? 'Game Over' : 'Won!'}
      </div>
      <button onClick={props.onClick} style={{backgroundColor: "lightGreen", borderWidth: "5px", borderRadius: "5px"}}>Play Again</button>
    </div>
  )

export default PlayAgain;