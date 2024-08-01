import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <div className='contenedor-general'>
        <h1 className='brand'>QueBuenaPINTA</h1>
        <NavBar />
        <ItemListContainer greeting="Bienvenido. Conoce nuestros productos."/>
      </div>
    </>
  );
}

export default App;