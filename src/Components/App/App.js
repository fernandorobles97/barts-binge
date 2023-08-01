import './App.css';
import logo from '../../images/barts-binge-logo.png';
import { Route, Routes } from 'react-router-dom';
import EpisodesContainer from '../EpisodesContainer/EpisodesContainer';
import { useEffect, useState } from 'react';
import { getAllEpisodes } from '../../apiCalls';
import EpisodeDetails from '../EpisodeDetails/EpisodeDetails';
import EmptyState from '../EmptyState/EmptyState';

function App() {
  const [episodes, setEpisodes] = useState([])
  const[error, setError] = useState(null)

  useEffect(() => {
    const apiCall = async () => {
      try {
        setEpisodes(await getAllEpisodes())
      }catch(error) {
        setError(error)
      }
    } 
    apiCall()
  }, [])
  console.log('sodes',episodes)
  
  return (
    <main>
      <div className='logo-container'>
        <img src={logo} alt='Barts Binge logo' />
      </div>
      <Routes>
        <Route path='/' element={<EpisodesContainer />} />
        <Route path='/allepisodes' element={<EpisodesContainer />} />
        <Route path='/episode/:id' element={<EpisodeDetails />} />
        <Route path='/allepisodes/*' element={<EmptyState />} />
        <Route path='/*' element={<EmptyState />} />
      </Routes>

    </main>
  );
}

export default App;
