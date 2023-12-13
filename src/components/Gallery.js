import Cart from './Carts'
import '../assets/Gallery.scss'
import { useState, useEffect } from 'react'
import fetchAppartementData from '../data/api'

function Gallery() {
  const [appartementsData, setAppartementsData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAppartementData('./logement.json')
      if (data) {
        setAppartementsData(data)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="gallery">
      <Cart appartementsData={appartementsData} />
    </div>
  )
}

export default Gallery
