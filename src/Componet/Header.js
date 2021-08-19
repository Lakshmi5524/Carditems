import React from 'react';

export default  function Header(props){
    const {countCardItem}=props
    return (
    <header className="row block center">
        <a href="#/">
         <h1>Shopping Card</h1>
        </a>
       <div>
           <a href="#/Card">
            Card {" "}
            { countCardItem ?( 
                <button className="badge">{countCardItem}</button>
            ) : (
             ''

            )}
            
            </a>{" "}
             <a href="#/Card">SinIn</a>
           
       </div>
    </header>
    )
}