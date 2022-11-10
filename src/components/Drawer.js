function Drawer() {
    return (

    <div style={{display: 'none'}} className="overlay">


        <div className="drawer">
            <h2 className="d-flex justify-between mb-30">Корзина<img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>
            <h1>{5 + 5}</h1>
            <div className="items">...
                <div className="cartItem d-flex align-center mb-20">
                    

                    <div 
                        class="cartItemImg" 
                        style={{backgroundImage: 'url(/img/wrappers/0001.jpg)'}} 
                        className="cartItemImg">
                    </div>
                    <div className="mr-20">
                        <p className="mb-5">Вкладыш 331-400 №389</p>
                        <b>435 руб</b>
                    </div>
                        <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>
                            {/* //beg  */}
                <div className="cartItem d-flex align-center mb-20">

                <div 
                    class="cartItemImg" 
                    style={{backgroundImage: 'url(/img/wrappers/0001.jpg)'}} 
                    className="cartItemImg">
                </div>

                <div className="mr-20"> 
                    <p className="mb-5">Вкладыш 331-400 №389</p>
                    <b>435 руб</b>
                </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>  
                                {/* end  */}

                <div className="cartItem d-flex align-center mb-20">

                <div 
                    class="cartItemImg" 
                    style={{backgroundImage: 'url(/img/wrappers/0001.jpg)'}} 
                    className="cartItemImg">
                </div>

                <div className="mr-20"> 
                    <p className="mb-5">Вкладыш 331-400 №389</p>
                    <b>435 руб</b>
                </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div> 

           
                <div className="cartTotalBlock">
                    <ul className="cartTotalBlock">
                        <li className="d-flex">
                        <span>Итого: </span>
                            <div></div>
                            <b>1239 руб</b>
                        </li>
                        <li className="d-flex">
                        <span>Доставка Почтой России</span>
                            <div></div>
                            <b>150 руб</b>
                        </li>
                    </ul>
            
                    <button className="greenButton">Оформить заказ 
                        <img src="/img/arrow.svg" alt="Arrow"></img> 
                    </button>
              
                </div>
                
            
            
            </div>
        </div>

    </div>
);
}

export default Drawer;