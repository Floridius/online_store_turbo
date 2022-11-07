import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

// const arr = [
//   { name: 'Вкладыш из серии 51-120', price: 435 }
//   { name: 'Вкладыш из серии 121-190', price: 358 }
// ];

const arr = [
   "name: 'Вкладыш из серии 51-120', price: 435",  
   "name: 'Вкладыш из серии 121-190', price: 358"
];





function App() {


  return (
    <div className="wrapper clear">
        
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
            <Card
              title='Вкладыш 555(51-640)'
              price={543}
              imageUrl="./img/wrappers/0002.jpg"
            />

            <Card
              title='Вкладыш 65(51-640)'
              price={503}
              imageUrl="./img/wrappers/0001.jpg"
            />

            <Card
              title='Вкладыш 25(51-640)'
              price={903}
              imageUrl="./img/wrappers/0002.jpg"
            />

            


            {/* {arr.map((obj) => (
            <Card />
            ))}; */}
          </div>

      ...
  </div>
</div>
  );
}

export default App;
