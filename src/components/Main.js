import React from 'react'
import '../assets/Main.scss'
import image1 from '../img/image1.png'
import Gallery from './Gallery.js'

function Main() {
  return (
    <main>
      <div className="introduction">
        <img
          className="introduction__img"
          src={image1}
          alt="océan et une falaise"
        />
        <div className="introduction__txt">
          <p>Chez vous, partout et ailleurs</p>
        </div>
      </div>
      <Gallery />
    </main>
  )
}

export default Main
