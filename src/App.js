import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <ItemListContainer greeting="Productos..." />
    </div>
  );
}

export default App;
