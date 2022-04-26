import TVShow from '../models/TVShow'

const renderTVShowCard = (show: TVShow, container: HTMLElement) => {
  const htmlContent = `
    <div class="tv-card">
    <iframe style="width:100%; height:100%; position:absolute;top:50px; overflow:hidden" frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/${show.id}?autoplay=1" margin="0 auto" width="100%" height="100%" allowfullscreen allow="autoplay">
    </iframe>
        </div>
        <h3>${show.titulo}</h3>
      </a>
   
    `
  container.innerHTML += htmlContent
}

export default renderTVShowCard
