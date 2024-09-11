import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data.js";
import "./index.css";

const singlePizza = pizzaData[0];
const { name, photoName, ingredients, ...other } = singlePizza;
console.log(name, photoName);
console.log(other);

function App() {
  return (
    <div className="container">
      <Header />
      <Menu></Menu>
      <Footer />
      {/* <PizzaItems /> */}
    </div>
  );
}

function Header() {
  <header className="header">
    <h1>Fast React Pizza Co.</h1>
  </header>;
}

const renderPizzaItems = () => {
  return pizzaData.map((pizza) => {
    return <Pizza pizzaObj={pizza} key={pizza.name} />;
  });
};

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone overn, all organic, all delicious.
          </p>
          <ul className="pizzas">{renderPizzaItems()}</ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}
    </div>
  );
}

function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;

  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} />
      ) : (
        <p>
          We're happt to welcome tou between {openHour}:00 and {closedHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closedHour }) {
  return (
    <div className="order">
      <p>We're open until {closedHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
