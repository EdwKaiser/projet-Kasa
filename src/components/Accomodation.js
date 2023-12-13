import React, { useState, useEffect } from 'react'
import fetchAppartementData from '../data/api.js'
import { useNavigate, useParams } from 'react-router-dom'
import '../assets/Accomodation.scss'
import { Arrow } from './Arrow'
import Carrousel from './Carrousel.js'
import Rating from './Rating.js'

function Accomodation() {
  const navigate = useNavigate()
  const [appartementsData, setAppartementsData] = useState(null)
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState({
    description: false,
    equipments: false,
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAppartementData('../logement.json')
        if (data) {
          const appartement = data.find((appartement) => appartement.id === id)
          if (appartement) {
            setAppartementsData(appartement)
          } else {
            navigate('/error')
          }
        }
      } catch (error) {}
    }
    fetchData()
  }, [id])

  const toggleOpen = (section) => {
    setIsOpen({
      ...isOpen,
      [section]: !isOpen[section],
    })
  }

  if (appartementsData === null) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div className="accomodation">
        <div className="accomodation__carrousel">
          <Carrousel appartement={appartementsData} />
        </div>
        <div className="accomodation__info">
          <div className="accomodation__left">
            <div className="accomodation__left--details">
              <h1>{appartementsData.title}</h1>
              <p>{appartementsData.location}</p>
            </div>
            <div className="accomodation__left--tags">
              {appartementsData && appartementsData.tags && (
                <ul>
                  {appartementsData.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <div className="accomodation__right">
            {appartementsData && appartementsData.host && (
              <div className="accomodation__right--host">
                <p>{appartementsData.host.name}</p>
                <img src={appartementsData.host.picture} alt="host" />
              </div>
            )}
            <div className="accomodation__right--rating">
              <Rating appartementsData={appartementsData} />
            </div>
          </div>
        </div>
        <div className="accomodation__bottom">
          <div className="accomodation__bottom--description">
            <div className="accomodation__bottom--button">
              <h2>
                Description
                <button
                  className={`accomodation__bottom--button ${
                    isOpen.description ? 'rotation' : ''
                  }`}
                  onClick={() => toggleOpen('description')}
                >
                  <Arrow width={32} height={33} />
                </button>
              </h2>
            </div>
            {isOpen.description && <p>{appartementsData.description}</p>}
          </div>
          <div className="accomodation__bottom--equipements">
            <div>
              <h2>
                Equipements
                <button
                  className={`accomodation__bottom--button ${
                    isOpen.equipments ? 'rotation' : ''
                  }`}
                  onClick={() => toggleOpen('equipments')}
                >
                  <Arrow width={32} height={33} />
                </button>
              </h2>
            </div>
            {appartementsData &&
              appartementsData.equipments &&
              isOpen.equipments && (
                <ul>
                  {appartementsData.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accomodation
