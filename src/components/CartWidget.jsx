import './CartWidget.css'
import cartIcon from '../../public/icon-cart-white.svg'

export default function CartWidget() {
  return (
    <>
      <div className='cartContainer'>
        <a className="cartIcon">
          <img class="cartIcon__img" src={cartIcon} alt="cart icon" />
        </a>
        <p className="cartNotificacion">0</p>
      </div>
    </>
  );
}