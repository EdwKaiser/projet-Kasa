import '../assets/Carts.scss'
import { Link } from 'react-router-dom'

function Cart({ appartementsData }) {
  return (
    <div className="all__carts">
      {appartementsData.map((appartement) => (
        <Link
          to={`/AccomodationSheet/${appartement.id}`}
          className="all__carts--link"
          key={appartement.id}
        >
          <div
            className="all__carts--cart"
            style={{ backgroundImage: `url(${appartement.pictures[0]})` }}
          >
            <h2 className="cart__title">{appartement.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Cart
