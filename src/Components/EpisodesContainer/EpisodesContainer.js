import { useEffect, useState } from 'react'
import './EpisodesContainer.css'
import EpisodeCard from '../EpisodeCard/EpisodeCard'
import PropTypes from 'prop-types'

const EpisodesContainer = ({allEpisodes}) => {
  const [topRatedEpisodes, setTopRatedEpisodes] = useState([])
  const randomEpisodes = []

  useEffect(() => {
    if (allEpisodes.length) {
      updateTopRatedEpisodes()
    }
  }, [allEpisodes])

  const updateTopRatedEpisodes = () => {
    const topRated = allEpisodes.filter(episode => episode.rating >= 8)

    getRandomEpisode(topRated)
    if (randomEpisodes.length === 3) {
      setTopRatedEpisodes(randomEpisodes)
    }

    if (randomEpisodes.length < 3) {
      updateTopRatedEpisodes(allEpisodes)
    }
  }

  const getRandomEpisode = (episodes) => {
    const singleRandomEpisode = episodes[Math.floor(Math.random()*episodes.length)]
    const duplicateEpisode = randomEpisodes.find(episode => episode.id === singleRandomEpisode.id)
    if (!duplicateEpisode) {
      randomEpisodes.push(singleRandomEpisode)
    }
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
      <div className='buttons-header-wrapper'>
        <button className='view-all-button'>View All Episodes</button>
        <h2 className='container-header'>Top Rated Episodes</h2>
        <button className='reroll-button' onClick={updateTopRatedEpisodes} >Reroll Episodes</button>
      </div>
      <div className='episodes-wrapper'>
        {topRatedCards.length === 3 && topRatedCards}
      </div>
    </div>
  )
}

export default EpisodesContainer

EpisodesContainer.propTypes = {
  allEpisodes: PropTypes.array
}