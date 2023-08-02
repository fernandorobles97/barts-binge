import { Link } from 'react-router-dom'
import './EpisodeCard.css'
import PropTypes from 'prop-types'


const EpisodeCard = ({ id, season, episode, name, rating, thumbnailUrl, }) => {
  return (
    <Link to={`episode/${id}`} className='episode-card'>
      <img src={thumbnailUrl} alt={`${name} thumbnail`} />
      <h3>{name}</h3>
      <p>Season: {season}</p>
      <p>Episode: {episode}</p>
      <p>Rating: {rating}</p>
    </Link>
  )
}

export default EpisodeCard

EpisodeCard.propTypes = {
  id: PropTypes.number.isRequired,
  season: PropTypes.number.isRequired,
  episode: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  airDate: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired
}