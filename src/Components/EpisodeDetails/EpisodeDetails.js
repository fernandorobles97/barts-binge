import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { getSingleEpisode } from "../../apiCalls"
import './EpisodeDetails.css'
import EmptyState from "../EmptyState/EmptyState"

const EpisodeDetails = () => {
  const [currentEpisode, setCurrentEpisode] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const location = useLocation().pathname.split('/episode/')[1]

  useEffect(() => {
    const apiCall = async () => {
      try {
        setCurrentEpisode(await getSingleEpisode(location))
        setLoading(false)
      }catch(error) {
        setError(error)
      }
      setLoading(false)
    } 
    apiCall()
  }, [])

  return(  
    <div className="episode-content">
      {error && <EmptyState errorMessage={error.message} />}
      {!loading && !error &&
        <section>
          <div className='episode-header-wrapper'>
            <h2 className='container-header'>{currentEpisode.name}</h2>
            <Link className='view-all-button' to='/allepisodes' >Back To All Episodes </Link>
          </div>
          <div className="episode-details-container">
            <div className="details-wrapper">
              <p className="episode-season">Season: {currentEpisode.season}</p>
              <p className="episode-number">Episode: {currentEpisode.episode}</p>
              <p className="episode-description">Description: {currentEpisode.description}</p>
              <p className="episode-rating">Rating: {currentEpisode.rating}</p>
              <p className="episode-airdate">Original Airdate: {currentEpisode.airDate.slice(0, 10)}</p>
            </div>
            <div className="img-container">
              <img src={currentEpisode.thumbnailUrl} alt={`${currentEpisode.name} thumbnail`} />
            </div>
          </div>
        </section> 
      } 
    </div>
  )
}

export default EpisodeDetails