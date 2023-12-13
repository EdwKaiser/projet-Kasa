import React, { useState, useEffect } from 'react'
import '../assets/Main.scss'
import image2 from '../img/image2.png'
import Info from '../components/InfoAPropos.js'

function MainAPropos() {
  const [listeInfo, setListeInfo] = useState([])

  const fetchInfo = async () => {
    try {
      const response = await fetch('./Apropos.json')
      if (response.ok) {
        const data = await response.json()
        setListeInfo(data)
      } else {
        console.error('Erreur lors de la récupération des données.')
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error)
    }
  }
  useEffect(() => {
    fetchInfo()
  }, [])

  return (
    <main>
      <div className="introduction">
        <img
          className="introduction__img"
          src={image2}
          alt="océan et une falaise"
        />
      </div>
      <Info listeInfo={listeInfo} />
    </main>
  )
}

export default MainAPropos
