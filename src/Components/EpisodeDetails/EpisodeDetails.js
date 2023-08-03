import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { getSingleEpisode } from "../../apiCalls"

const EpisodeDetails = () => {
  const [currentEpisode, setCurrentEpisode] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const location = useLocation().pathname.split('/episode/')[1]
  const episodeLocation = parseInt(location)
  console.log(episodeLocation)

  useEffect(() => {
    const apiCall = async () => {
      setLoading(true)
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
    <main>
      <div className='buttons-header-wrapper'>
        <h2 className='container-header'>{currentEpisode.name}</h2>
      </div>
    </main>
  )
}

export default EpisodeDetails