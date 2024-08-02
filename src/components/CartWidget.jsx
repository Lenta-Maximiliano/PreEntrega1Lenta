import './CartWidget.css'
import cartIcon from '/icon-cart-white.svg'

export default function CartWidget() {
  return (
    <>
      <div className='cartContainer'>
        <a className="cartIcon">
          <img className="cartIcon__img" src={cartIcon} alt="cart icon" />
        </a>
        <p className="cartNotificacion">0</p>
      </div>
    </>
  );
}