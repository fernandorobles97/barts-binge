import { mapCards } from "../../helpers"

const AllEpisodesContainer = ({allEpisodes}) => {

  const allEpisodeCards = mapCards(allEpisodes)

  return (
    <div className='episodes-container'>
      <div className='buttons-header-wrapper'>
        <h2 className='container-header'>All Episodes</h2>
      </div>
      <div className='episodes-wrapper'>
        {allEpisodeCards}
      </div>
    </div>
  )
}

export default AllEpisodesContainer