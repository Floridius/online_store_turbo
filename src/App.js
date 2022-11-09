import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
   {name: 'Вкладыш из серии 121-3222', 
    price: 500, 
    imageUrl: '/img/wrappers/0001.jpg', },

    {name: 'Вкладыш из серии 41-888', 
    price: 43, 
    imageUrl: '/img/wrappers/0002.jpg', },

    {name: 'Вкладыш из серии 81-777', 
    price: 581, 
    imageUrl: '/img/wrappers/0001.jpg', },

    {name: 'Вкладыш из серии 1-190', 
    price: 999, 
    imageUrl: '/img/wrappers/0002.jpg', },

];

function App() {
  const [count, setCount] = React.useState(5);

    const plus = () => {
      setCount(count + 1);
    };

    const minus = () => {
      setCount(count - 1);
    }


  return (
<div className="wrapper clear">
<center><div>
        <h1>{count}</h1>
        <button onClick={plus}>+</button>
        <button onClick={() => minus()}>-</button>
      </div>
      </center> 
        
{/* <Drawer /> */}
<Header />

  <div className="content p-40">
    <div className="d-flex align-center justify-between mb-40">
      <h1>Все вкладыши</h1>
      <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search" />
        <input placeholder="Поиск ..." />
      </div>
    </div>
      <div className="d-flex">

        {/* <div className='d-flex'>
         {arr.map((obj) => (
          <p>{obj.name}</p>
         ))}
          
         </div> */}

      

         

        {/* <Card />
        <Card />
        <Card />
        <Card /> */}

    </div>


        <div className='d-flex'>
          {arr.map((obj) => (
             <Card
             title={obj.name}
             price={obj.price}
             imageUrl={obj.imageUrl}
             onFavorite={() => console.log('Добавлено в Избранное')}
             onPlus={() => console.log('Добавлено в Корзину')}
           />
            ))}
        </div>

      ...texttttttt
  </div>
</div>
  );
}

export default App;
