import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Productos..." />}
          />
          <Route path="/:userId" element={<ItemDetailContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
