import TVShow from '../models/TVShow'

const renderTVShowCard = (show: TVShow, container: HTMLElement) => {
  const htmlContent = `
    <div class="tv-card">
      <a class="modal-link" id="modal-${show.id}" href="tvshow.html?id=${
    show.id
  }">
       
        <h3>${show.titulo}</h3>
      </a>
    </div>
    `
  container.innerHTML += htmlContent
}

export default renderTVShowCard
