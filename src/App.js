import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import {
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;
