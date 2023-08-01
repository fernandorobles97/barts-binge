const handleError = (response) => {
  if(!response.ok) {
    throw new Error(`Error: ${response.status} -- Please try again!`)
  }
  return response.json()
}

const getAllEpisodes = async() => {
  let response = await fetch('https://api.sampleapis.com/simpsons/episodes')
  let data = await handleError(response)
  console.log(data)
}

export {getAllEpisodes}