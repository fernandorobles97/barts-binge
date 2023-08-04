import './App.css';
import logo from '../../images/barts-binge-logo.png';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllEpisodes } from '../../apiCalls';
import EpisodeDetails from '../EpisodeDetails/EpisodeDetails';
import EmptyState from '../EmptyState/EmptyState';
import AllEpisodesContainer from '../EpisodesContainer/AllEpisodesContainer';
import TopEpisodesContainer from '../EpisodesContainer/TopEpisodesContainer';

function App() {
  const [episodes, setEpisodes] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const apiCall = async () => {
      setLoading(true)
      try {
        setEpisodes(await getAllEpisodes())
        setLoading(false)
      }catch(error) {
        setError(error)
      }
      setLoading(false)
    } 
    apiCall()
  }, [])

  return (
    <main>
      <div className='logo-container'>
        <Link to={'/'}>
          <img className='barts-logo' src={logo} alt='Barts Binge logo' />
        </Link>
      </div>
      <Routes>
        <Route path='/' element={loading ? <EmptyState/> : error ? <EmptyState errorMessage={error.message} /> : <TopEpisodesContainer allEpisodes={episodes} />} />
        <Route path='/allepisodes' element={<AllEpisodesContainer allEpisodes={episodes} />} />
        <Route path='/episode/:id' element={<EpisodeDetails />} />
        <Route path='/allepisodes/*' element={<EmptyState errorMessage={'This page does not exist, please go back!'} />} />
        <Route path='/*' element={<EmptyState errorMessage={'This page does not exist, please go back!'} />} />
      </Routes>
    </main>
  );
}

export default App;
