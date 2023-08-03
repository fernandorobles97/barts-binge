import { useEffect, useState } from "react"
import { mapCards } from "../../helpers"

const AllEpisodesContainer = ({allEpisodes}) => {
  const [seasonNumber, setSeasonNumber] = useState(1) 

  useEffect(() => {
    
  }, [seasonNumber])

  const filterBySeason = (seasonValue) => {
    const seasonNum = seasonValue
    console.log('me',seasonValue)

    const seasonEpisodes = allEpisodes.filter(episode => episode.season === parseInt(seasonNum))
    console.log(seasonEpisodes)
    return seasonEpisodes
  }

  const allEpisodeCards = mapCards(filterBySeason(seasonNumber))

  return (
    <div className='episodes-container'>
      <div className='buttons-header-wrapper'>
        <h2 className='container-header'>All Episodes</h2>
        <select value={seasonNumber} className="filter-seasons" onChange={e => setSeasonNumber(e.target.value)}>
          <option value={1}>Season 1</option>
          <option value={2}>Season 2</option>
          <option value={3}>Season 3</option>
          <option value={4}>Season 4</option>
          <option value={5}>Season 5</option>
          <option value={6}>Season 6</option>
          <option value={7}>Season 7</option>
          <option value={8}>Season 8</option>
          <option value={9}>Season 9</option>
          <option value={10}>Season 10</option>
        </select>
      </div>
      <div className='episodes-wrapper'>
        {allEpisodeCards}
      </div>
    </div>
  )
}

export default AllEpisodesContainer