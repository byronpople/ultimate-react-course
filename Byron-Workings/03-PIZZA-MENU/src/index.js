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
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function PizzaItems() {
  const listItems = pizzaData.map((pizza) => (
    <div className="pizza" key={pizza.name}>
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </div>
  ));
  return <div className="container">{listItems}</div>;
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <PizzaItems />
      {/* <Pizza
        name={name}
        photoName={photoName}
        ingredients={ingredients}
        price={190}
      /> */}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closedHour = 17;
  const isOpen = hour >= openHour && hour <= closedHour;
  // if (hour >= openHour && hour <= closedHour) alert("Open");
  // else alert("Closed");

  console.log(isOpen);

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()} We're currently open!{" "}
    </footer>
  );
}

// function Pizza(props) {
//   console.log(props);
//   return (
//     <div className="pizza">
//       <img src={props.photoName} alt={props.name} />
//       <div>
//         <h3>{props.name}</h3>
//         <p>{props.ingredients}</p>
//         <span>{props.price}</span>
//       </div>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
