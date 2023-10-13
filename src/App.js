import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';

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
        <div className="container">
            <Routes>
              <Route exact path="/" element={<Home/>}></Route>
              <Route exact path="/about" element={<About />} ></Route>
              {/* <Route exact path="/login" element={<Login showAlert={showAlert}/>} ></Route>
              <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} ></Route> */}
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
