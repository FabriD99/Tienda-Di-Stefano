import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <ItemListContainer greeting="Productos..." />
      <ItemCount stock={5} initial={0} />
    </div>
  );
}

export default App;
