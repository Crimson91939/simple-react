import "./App.css";
import "./Components/Item";
import Item from "./Components/Item";

function App() {
  return (
    <div>
      <h1 className="title">Item list</h1>
      <div className="itemsort">
        <Item text="dildo" price="30" />
        <Item text="breakfast" price="40" />
        <Item text="pussy Simulator" price="50" />
        <Item text="cake" price="60" />
      </div>

     
    </div>
  );
}

export default App;
