import React, {useState} from 'react';
import utils from '../math-utils';


const useGameState = () => {
    const [stars, setStars] = useState(utils.random(1, 9));
    const [availableNums, setAvialableNums] = useState(utils.range(1, 9));
    const [candidateNums, setCandidateNums] = useState([]);
    const [secondsLeft, setSecondsLeft] = useState(10);
  
    React.useEffect(() => {
      if (secondsLeft > 0 && availableNums.length > 0) {
        const timerId = setTimeout(() => {
          setSecondsLeft(secondsLeft - 1);
        }, 1000)
        return () =>  clearTimeout(timerId);
      }
    });
  
    const setGameState = (newCandidageNums) => {
      if (utils.sum(newCandidageNums) !== stars) {
          setCandidateNums(newCandidageNums);
      } else {
        const newAvialableNumbs = availableNums.filter(
            n => !newCandidageNums.includes(n)
          );
        setStars(utils.randomSumIn(newAvialableNumbs, 9));
        setAvialableNums(newAvialableNumbs);
        setCandidateNums([]);
      }
    }
    
    return {
      stars,
      availableNums,
      candidateNums,
      secondsLeft,
      setGameState
    }
  };

export default useGameState;