import React from 'react';

export default  function Basket(props){
      const {cartItem,onAdd,onRemove} = props
      const itemPrice = cartItem.reduce((a,c)=>a+c.price*c.qty,0);
      const textPrice = itemPrice *0.14;
      const ShipingPrice = itemPrice >200 ? 0:50;
      const totalPrice = itemPrice + textPrice + ShipingPrice;


    return( 
       <aside className="block col-2">Basket
             <h2>Prodects</h2>
             <div className="">
               {cartItem.length===0&&<idv>Carr Is Empty</idv>}

             </div>
             {cartItem.map((item)=>(

                   <div key={item.id}className="row">
                         <div className="col-2">{item.name}</div>
                   <div className="col-2">
                   <button onClick={()=>onAdd(item)} className="add">Add</button>
                   <button onClick={()=>onRemove(item)} className="add">Remove</button> 
                   </div>

                   <div className="col-2 text-right">
                         {item.qty}x${item.price.toFixed(2)}
                   </div>
                  </div>
                    ))}


                  {cartItem.length!==0 &&(
                <>
                <hr></hr>
                   <div className="row">
                    <div className="col-2">Item Price</div>
                    <div className="col-1  text-right">$ {itemPrice.toFixed(2)}</div>
                   </div>

                   <div className="row">
                    <div className="col-2">Tax Price</div>
                    <div className="col-1  text-right">$ {textPrice.toFixed(2)}</div>
                   </div>

                   <div className="row">
                    <div className="col-2">Shipping Price</div>
                    <div className="col-1  text-right">$ {ShipingPrice.toFixed(2)}</div>
                   </div>

                   <div className="row">
                    <div className="col-2">
                          <strong>Total Price</strong>
                    </div>
                    <div className="col-1  text-right">
                          <strong>$ {totalPrice.toFixed(2)}</strong>
                    </div>
                   </div>
                   <hr />
                   <div className="row">
                         <button onClick={()=>alert('implement checkout')}>
                            Checkout
                         </button>
                   </div>
                    </> 
                  )}
       </aside>


      )
   }

   