import EpisodeCard from "./Components/EpisodeCard/EpisodeCard"

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

export {mapCards}