type Video = {
  id: string
  title: string
  thumbnail?: string
  category?: string
  
}

export const getTvShow = (objJson: any): Video => {
  const {
    id,
    title,
    thumbnail,
    channel
} = objJson
   

  const tvShow: Video = {
    id,
    title,
    thumbnail,
    category: channel
  
  }
  return tvShow
}

export default Video
