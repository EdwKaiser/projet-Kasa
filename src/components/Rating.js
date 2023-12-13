import '../assets/Rating.scss'

function Rating({ appartementsData }) {
  const rate = appartementsData.rating
  const maxRate = 5
  console.log(appartementsData.rating)

  return (
    <div className="stars">
      {[...Array(maxRate)].map((_, index) => (
        <span className="star" key={index}>
          {index < rate ? '★' : '☆'}
        </span>
      ))}
    </div>
  )
}

export default Rating
