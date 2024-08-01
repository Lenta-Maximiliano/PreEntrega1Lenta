import './NavBar.css';
import ButtonComponent from './ButtonComponent';
import CartWidget from './CartWidget';

export default function NavBar() {
  return (
    <>
      <nav className="barra">
        <a href="#">
          <img className='logo-NavBar' src="../../public/Logo.png" alt="Logo Ecommerce" />
        </a>
        <div className='btnContainer'>
          <ButtonComponent nombre="Cervezas" />
          <ButtonComponent nombre="Vinos" />
          <ButtonComponent nombre="Sidras" />
        </div>
        <div>
          <CartWidget />
        </div>
      </nav>
    </>
  );
}
