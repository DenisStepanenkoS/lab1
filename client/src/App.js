import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingUp from './pages/SingUp'
import Login from './pages/Login';
import Home from './pages/Home';
import Header from './Components/Header';
const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SingUp />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
