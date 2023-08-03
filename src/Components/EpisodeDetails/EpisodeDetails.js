import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { getSingleEpisode } from "../../apiCalls"
import './EpisodeDetails.css'

const EpisodeDetails = () => {
  const [currentEpisode, setCurrentEpisode] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const location = useLocation().pathname.split('/episode/')[1]
  const episodeLocation = parseInt(location)
  console.log(episodeLocation)

  useEffect(() => {
    const apiCall = async () => {
      // setLoading(true)
      try {
        setCurrentEpisode(await getSingleEpisode(episodeLocation))
        setLoading(false)
      }catch(error) {
        setError(error)
      }
      setLoading(false)
    } 
    apiCall()
  }, [])
  console.log(currentEpisode)

  return(  
    <div className="episode-content">
      {!loading &&
        <section>
          <div className='buttons-header-wrapper'>
            <h2 className='container-header'>{currentEpisode.name}</h2>
            <Link className='view-all-button' to='/allepisodes' >Back To All Episodes </Link>
          </div>
          <div className="episode-details-container">
            <div className="details-wrapper">
              <p>Season: {currentEpisode.season}</p>
              <p>Episode: {currentEpisode.episode}</p>
              <p>Description: {currentEpisode.description}</p>
              <p>Rating: {currentEpisode.rating}</p>
              <p>Original Airdate: {currentEpisode.airDate.slice(0, 10)}</p>
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