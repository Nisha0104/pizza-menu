import React from 'react';
import ReactDOM  from 'react-dom/client';
import './index.css';
const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  
  
function App(){
  return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

function Header(){
    return (<div className='header'>
        <header>
        <h1>Fast React Pizza Co.</h1>
        </header>
    </div>)
}
function Menu(){
  const pizza=pizzaData ;
  const pizzaLength=pizza.length;
    return <main className='menu'>
       <h2>Our Menu</h2>
       {
        (pizzaLength>0 ?
       <>
       <p>Aurthntic Italian cusine. 6 creative dishes to choose from. All from our stone oven, all orgain,all delicious </p>
          <ul className='pizzas'>
        {pizza.map((pizza)=>
        <Pizza pizzaNewObj={pizza} key={pizza.name}
        />)}
       </ul> 
       </>: <p>We're still working on our menu. Please come back later :)</p>)
       }
    </main>
}
function Pizza({pizzaNewObj}) {
    return <div className={`pizza ${pizzaNewObj.soldOut ?"sold-out":""}`}>
       <img src={pizzaNewObj.photoName}alt={pizzaNewObj.name} />
        <div>
        <h3>{pizzaNewObj.name}</h3>
        <p>{pizzaNewObj.ingredients}</p>
        <span>{!pizzaNewObj.soldOut? pizzaNewObj.price :<p>SoldOut</p>}</span>
        </div>
    </div>
}
function Footer(){
    const hour= new Date().getHours();
    const openHour=12;
    const closeHour=20;
    const isOpen=(hour>=openHour && hour<=closeHour);
    
     return <footer className='footer'>
        {isOpen ? (
        <Order closeHours={closeHour}/>
        ):<p>We're happy to welcome you between {openHour}.00 and {closeHour}.00</p>}
     
      </footer>

}
function Order({closeHours}){
  return <div className='order'>
  <p>We are open until {closeHours}.00. Come visit us or order online.</p>
  <button className='btn'>Order</button>
  </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);