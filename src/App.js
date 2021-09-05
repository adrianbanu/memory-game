import React, {useState, useEffect} from "react";
import avengersInfo from './avengers.json';
import './App.css';
import Avenger from "./components/Avenger";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {

const [avengers, setAvengers] = useState(avengersInfo);
const [score, setScore] = useState(0);
const [bestScore, setBestscore] = useState(0);
const [winner, setWinner] = useState(false);

const avengerClick = (id) => {
  avengers.forEach(avenger =>{
    if(id === avenger.id && avenger.chosen === false){
      avenger.chosen = true;
      updateScore();
      //console.log("winner: ", winner, " scor: ", score);
      //winner && winGame(); // este inutil pentru ca scorul nu este updatat in timp real. winner este inutil
      // doar daca schimb (score === 11) && winGame();
    }else if(id === avenger.id && avenger.chosen === true){
      endGame(); // asta si winGame chiar sunt inutile
      resetGame();
    }
  })

  setAvengers(shuffleArray(avengers)); 
}


useEffect(() => {
  if(score > bestScore){
    setBestscore(score);
  }
  if(score === 12){
    setWinner(true);
  }
}, [bestScore, score]);


const shuffleArray = (avengers) => {
    for (let i = avengers.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); 

    [avengers[i], avengers[j]] = [avengers[j], avengers[i]];
  }
  return avengers;
}

const updateScore = () => {
  setScore(score + 1);
}

const endGame = () => {
  console.log("You lost");
}

const winGame = () => {
  console.log("You won");
}

const resetGame = () => {
  setWinner(false);
  setScore(0);
  avengers.forEach(avenger => {
    avenger.chosen = false;
  })
}

window.onclick = function(event) {
  if (winner) {
    setWinner(false);
    winGame();
    resetGame();
  }
}

  return (
    <div>
      <Navbar 
        score = {score}
        bestScore = {bestScore}
      />
      {winner && <Modal />}
      <main>
        <div className="avengers-grid">
          {avengers.map(avenger => (
            <Avenger 
              name = {avenger.name}
              image = {avenger.image}
              key = {avenger.id}
              elementId = {avenger.id}
              chooseAvenger = {avengerClick}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
