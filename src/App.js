//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [home, setHomeResult] = useState(0);
  const [away, setAwayResult] = useState(0);
  


  
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Panthers</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{home}</div>
          </div>
          <div className="timer">05:00</div>
          <div className="away">
            <h2 className="away__name">Redskins</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          
          <button className="homeButtons__touchdown" onClick={() => setHomeResult(home + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => setHomeResult(home + 3)}>Home Field Goal</button>
          <button className="reset" onClick={() => setHomeResult(0)}>Reset</button> 
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setAwayResult(away + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setAwayResult(away + 3)}>Away Field Goal</button>
          <button className="reset" onClick={() => setAwayResult(0)}>Reset</button>
        </div>
      </section>
    </div>
  );
}

export default App;
