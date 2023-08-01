import { useState } from 'react'
import './EpisodesContainer.css'

const EpisodesContainer = (props) => {
  const [topRatedEpisodes, setTopRatedEpisodes] = useState([])

  const getTopRatedEpisodes = () => {
    const topRated = props.allEpisodes.filter(episode => episode.rating >= 8)
    setTopRatedEpisodes(topRated)
  }

  return (
    <div className='episodes-container'>
      <button className='view-all-button'>View All Episodes</button>
      <h2>Top Rated Episodes</h2>
        {/* {episodes here} */}
      <button className='reroll-button'>Reroll Episodes</button>
    </div>
  )
}

export default EpisodesContainer