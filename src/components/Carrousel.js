import { Arrow } from './Arrow'
import '../assets/Carrousel.scss'
import { useEffect, useState } from 'react'

function Carrousel({ appartement }) {
  const [index, setIndex] = useState(0)
  const [hide, setHide] = useState()

  useEffect(() => {
    if (appartement.pictures.length <= 1) {
      setHide(false)
    } else {
      setHide(true)
    }
  }, [appartement.pictures.length])

  const handleRight = (index, pictures) => {
    if (index === pictures.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const handleLeft = (index, pictures) => {
    if (index === 0) {
      setIndex(pictures.length - 1)
    } else {
      setIndex(index - 1)
    }
  }
  return (
    <div className="carrousel">
      <div className="carrousel__pictures">
        <img
          className="carrousel__pictures--picture"
          src={appartement.pictures[index]}
          alt="Appartement"
        />
        {hide === true && (
          <div className="carrousel__button">
            <button
              className="carrousel__button--left"
              onClick={() => {
                handleLeft(index, appartement.pictures)
              }}
            >
              <Arrow width={140} height={140} />
            </button>
            <button
              className="carrousel__button--right"
              onClick={() => {
                handleRight(index, appartement.pictures)
              }}
            >
              <Arrow />
            </button>
          </div>
        )}
        {hide === true && (
          <div className="carrousel__pictures--counter">
            <p>
              {index + 1}/{appartement.pictures.length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Carrousel
