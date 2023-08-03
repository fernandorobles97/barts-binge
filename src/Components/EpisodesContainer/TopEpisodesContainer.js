import { useEffect, useState } from 'react'
import './EpisodesContainer.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { mapCards } from '../../helpers'

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

  const topRatedCards= mapCards(topRatedEpisodes)


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