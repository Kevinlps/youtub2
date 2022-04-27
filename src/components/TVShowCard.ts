import TVShow from '../models/TVShow'

const renderTVShowCard = (show: TVShow, container: HTMLElement) => {
  const htmlContent = `
    <div class="tv-card">
    
        </div>
        <h3>${show.titulo}</h3>
      </a>
   
    `
  container.innerHTML += htmlContent
}

export default renderTVShowCard
