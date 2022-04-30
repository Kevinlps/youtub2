import Video from '../models/TVShow'
//import TVShow from '../models/TVShow'


const renderTVShowCard = (show: Video, container: HTMLElement) => {
  const htmlContent = `
    <div class="tv-card">
    <a id="modal-${show.id}" href="tvshow.html?id=${show.id}">
        <div class="show-banner">
            <img src="https://www.dailymotion.com/thumbnail/video/${show.id}">
        <div>
        <h2>${show.title}<h2>
      </a>
    </div>
    `
  container.innerHTML += htmlContent
}

export default renderTVShowCard
