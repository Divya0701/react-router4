// Write your JS code here
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

const Cart = props => {
  const {history} = props

  if (Cookies.get('jwt_token') === undefined) {
    history.replace('/login')
  }

  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
          alt="cart"
          className="cart-img"
        />
      </div>
    </>
  )
}

export default Cart
