import Player from './components/Player/index';
import Control from './components/Control/index';
import { useEffect, useState } from 'react';

function App() {
  const [state, setState] = useState({
    players: window.$getSave()
  });

  useEffect(() => {
    window.$save(state.players)
  }, [state]);

  const createPlayer = name => {
    setState(state => ({
      ...state,
      players: [
        ...state.players,
        {
          id: new Date().getTime(),
          name,
          init: 0,
          borrow: 0,
          current: 0
        }
      ]
    }));
  };

  const handleDelClick = idx => {
    const players = state.players;
    players.splice(idx, 1);
    setState(state => ({
      ...state,
      players
    }));
  };

  const handleEditPlayerClick = (data, idx) => {
    const players = state.players;
    players[idx] = {
      ...players[idx],
      name: data.nameRef.current.value,
      init: Number(data.initRef.current.value),
      borrow: Number(data.borrowRef.current.value),
      current: Number(data.currentRef.current.value)
    };
    setState(state => ({
      ...state,
      players
    }));
  };

  return (
    <div>
      <Control createPlayer={createPlayer} />
      <Player
        players={state.players}
        handleDelClick={handleDelClick}
        handleEditPlayerClick={handleEditPlayerClick}
      />
    </div>
  );
}

export default App;
