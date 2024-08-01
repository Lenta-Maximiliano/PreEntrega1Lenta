import './ItemListContainer.css';

export default function ItemListContainer({greeting}) {
  return (
    <>
      <h3 className='greetingText'>
        {greeting}
      </h3>
    </>
  );
}