import { useEffect, useState } from 'react'
import './EpisodesContainer.css'
import EpisodeCard from '../EpisodeCard/EpisodeCard'
import PropTypes from 'prop-types'

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

  const topRatedCards = topRatedEpisodes.map(episode => {
    return (
      <EpisodeCard 
        key={episode.id}
        id={episode.id}
        season={episode.season}
        episode={episode.episode}
        name={episode.name}
        rating={episode.rating}
        description={episode.description}
        airDate={episode.airDate}
        thumbnailUrl={episode.thumbnailUrl}
      />
    )
  })

  return (
    <div className='episodes-container'>
      <button className='view-all-button'>View All Episodes</button>
      <h2>Top Rated Episodes</h2>
        {topRatedCards.length === 3 && topRatedCards}
      <button className='reroll-button'>Reroll Episodes</button>
    </div>
  )
}

export default EpisodesContainer

EpisodesContainer.propTypes = {
  allEpisodes: PropTypes.array
}