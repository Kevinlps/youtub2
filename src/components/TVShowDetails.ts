import TVShow from '../models/TVShow'

//const $ = document.querySelector.bind(document)

const renderTVShowDetails = (show: TVShow, container: HTMLElement) => {
  const htmlContent = `
  <div id="videoRendered"> 
  <iframe style="width:100%; height:100%; position:absolute;top:50px; overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${show.id}?autoplay=1" margin="0 auto" width="100%" height="100%" allowfullscreen allow="autoplay">
  </iframe>
</div>
<br>
<h2>${show.titulo}</h2>
  `

  container.innerHTML = htmlContent


}


export default renderTVShowDetails
