import TVShow from '../models/TVShow'

//const $ = document.querySelector.bind(document)

const renderTVShowDetails = (show: TVShow, container: HTMLElement) => {
  const htmlContent = `
    <div id="show-container">


      <div id="details-container">
        <p><span class="detail-title">Título:</span> ${show.titulo}</p>
        <p><span class="detail-title">Tipo:</span> ${show.owner}</p>
        <p><span class="detail-title">Canal:</span> ${show.canal}</p>

         <button id="backbtn" onclick="history.back()">Voltar</butt>
      </div>
    </div>
  `

  container.innerHTML = htmlContent


}


export default renderTVShowDetails
