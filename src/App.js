import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';

function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    album: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `https://picsum.photos/v2/list?&limit=10`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((album) => {
        setAppState({ loading: false, album: album });
      });
      console.log(React.version)
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <h1>React Image Gallery Demo</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} album={appState.album} />
      </div>
      <footer>
        <div className='footer'>
          Built{' '}
          <span role='img' aria-label='love'>
            ❤️
          </span>{' '}
           by Ray Chavez
        </div>
      </footer>
    </div>
  );
}
export default App;
