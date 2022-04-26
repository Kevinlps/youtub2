type Video = {
  id: string
  titulo: string
  canal:string
  
}

export const getTvShow = (objJson: any): Video => {
  const {
    id,
    titulo,
    canal,
   
  } = objJson

  const tvShow: Video = {
    id,
   titulo,
   canal,
  
   
  }
  return tvShow
}

export default Video
