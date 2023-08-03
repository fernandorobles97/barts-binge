import EpisodeCard from "../EpisodeCard/EpisodeCard"

const AllEpisodesContainer = ({allEpisodes}) => {

  const mapCards = (episodes) => {
    console.log('here',episodes)
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