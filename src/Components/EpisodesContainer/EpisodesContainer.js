import { useEffect, useState } from 'react'
import './EpisodesContainer.css'

const EpisodesContainer = ({allEpisodes}) => {
  const [topRatedEpisodes, setTopRatedEpisodes] = useState([])
  const randomEpisodes = []

  useEffect(() => {
    updateTopRatedEpisodes(allEpisodes)
  }, [allEpisodes])

  const updateTopRatedEpisodes = (episodes) => {
    const topRated = episodes.filter(episode => episode.rating >= 8)

    getRandomEpisodes(topRated)
    if (randomEpisodes.length === 3) {
      setTopRatedEpisodes(randomEpisodes)
    }

    if (randomEpisodes.length < 3) {
      updateTopRatedEpisodes(episodes)
    }
  }

  const getRandomEpisodes = (episodes) => {
    const singleRandomEpisode = episodes[Math.floor(Math.random()*episodes.length)]
    randomEpisodes.push(singleRandomEpisode)
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