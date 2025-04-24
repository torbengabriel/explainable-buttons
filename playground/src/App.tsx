import { ExplainableButton, TooltipDirection } from 'explainable-buttons';
import { useState } from 'react';


const App = () => {
    const [user, setUser] = useState({
        isLoggedIn: false,
        points: 5,
        isAdmin: false
      });

  return (
    <div style={{ padding: 40 }}>
      <h1>Explainable Buttons Playground</h1>

      <ExplainableButton
        disabledConditions={[
          { when: user.points < 10, reason: 'you need at least 10 points' },
          { when: !user.isLoggedIn, reason: 'you must be logged in' },
        ]}
        tooltipDirection={TooltipDirection.RIGHT}
        tooltipBackground="#de2a36"
      >
        Next Level
      </ExplainableButton>
      
      <p>Current Points: {user.points} </p>
      <p>you are logged in: {String(user.isLoggedIn)} </p>

      <button 
      style={{ marginRight: 10 }}
        onClick={() => setUser(prev => ({
          ...prev,
          points: prev.points + 1,
      }))}>add point
      </button>

      <button 
        onClick={() => setUser(prev => ({
          ...prev,
          isLoggedIn: true,
      }))}>login
      </button>


      <ExplainableButton
        disabledConditions={{
          type: 'and',
          conditions: [
            { when: !user.isLoggedIn, reason: 'you must be logged in' },
            {
              type: 'or',
              conditions: [
                { when: user.points < 10, reason: 'you need at least 10 points' },
                { when: !user.isAdmin, reason: 'only for admins' },
              ],
            },
          ],
        }}
        tooltipDirection={TooltipDirection.BOTTOM}
        tooltipBackground="#007bff"
      >
        Save
      </ExplainableButton>
    </div>
  );
};

export default App;
