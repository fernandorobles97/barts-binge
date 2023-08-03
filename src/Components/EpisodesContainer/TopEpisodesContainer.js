import { useEffect, useState } from 'react'
import './EpisodesContainer.css'
import EpisodeCard from '../EpisodeCard/EpisodeCard'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'

const TopEpisodesContainer = ({allEpisodes}) => {
  const [topRatedEpisodes, setTopRatedEpisodes] = useState([])
  const randomEpisodes = []

  useEffect(() => {
    if (allEpisodes.length) {
      updateTopRatedEpisodes()
    }
  }, [])

  const updateTopRatedEpisodes = () => {
    const topRated = allEpisodes.filter(episode => episode.rating >= 8)

    getRandomEpisode(topRated)
    if (randomEpisodes.length === 3) {
      setTopRatedEpisodes(randomEpisodes)
    }

    if(randomEpisodes.length > 3) {
      randomEpisodes.pop()
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

  const mapCards = (episodes) => {
    return episodes.map(episode => {
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
  } 

  const allEpisodeCards = mapCards(allEpisodes)
  const topRatedCards= mapCards(topRatedEpisodes)

  console.log('here1', allEpisodeCards)

  return (
    <div className='episodes-container'>
      <div className='buttons-header-wrapper'>
        <Link className='view-all-button' to='/allepisodes' >View All Episodes</Link>
        <h2 className='container-header'>Top Rated Episodes</h2>
        <button className='reroll-button' onClick={updateTopRatedEpisodes} >Reroll Episodes</button>
      </div>
      <div className='episodes-wrapper'>
        {topRatedCards}
      </div>
    </div>
  )
}

export default TopEpisodesContainer

TopEpisodesContainer.propTypes = {
  allEpisodes: PropTypes.array
}