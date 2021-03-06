import { getTvShow } from './models/TVShow'
import axios from 'axios'

import renderTVShowDetails from './components/TVShowDetails'
import {API_URL} from './config'
import './style.css'



const searchTVShow = async (id: string) => {
  const http = axios.create({
    baseURL: API_URL
  })

  const response = await http.get(`/video/${id}`)

  if (response.status == 200) {
    const { data } = response
    const tvShow = getTvShow(data)
    const container = <HTMLDivElement>document.querySelector('#container')
    renderTVShowDetails(tvShow, container)
  }
}

const params = new URLSearchParams(document.location.search)
const id = params.get('id')
if (id) {
  searchTVShow(id)
}
