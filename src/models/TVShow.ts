type Video = {
  id: string
  titulo: string
  canal:string
  owner: string

}

export const getTvShow = (objJson: any): Video => {
  const {
    id,
    titulo,
    canal,
    owner,
  } = objJson

  const tvShow: Video = {
    id,
   titulo,
   canal,
   owner,
   
  }
  return tvShow
}

export default Video
