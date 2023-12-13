import { useState } from 'react'
import '../assets/InfoAPropos.scss'
import arrow from '../img/arrow-icon_fontawesome.svg'

function Info({ listeInfo }) {
  const [isOpen, setIsOpen] = useState(Array(listeInfo.length).fill(false))
  const handleClick = (index, event) => {
    const newIsOpenStates = [...isOpen]
    newIsOpenStates[index] = !newIsOpenStates[index]
    setIsOpen(newIsOpenStates)
  }

  return (
    <div className="info">
      {listeInfo.map((info, index) => (
        <div key={info.id} data={info.id} className="info__apropos">
          <div className="info__apropos--title">
            <h1>{info.title}</h1>
            <button
              className={`info__apropos--title--button ${
                isOpen[index] ? 'rotation' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              <img src={arrow} alt="Flèche directionelle" />
            </button>
          </div>
          <div
            className={`info__apropos--description ${
              isOpen[index] ? 'open' : ''
            }`}
          >
            <p>{info.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Info
