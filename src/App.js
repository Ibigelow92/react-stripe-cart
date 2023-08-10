import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from './components/Navbar';
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Cancel from "./pages/Cancel";
import Store from "./pages//Store";
import Success from "./pages/Success";
// React router allows us to show user different data based 
// on the link they have 
// localhost:3000 -> Home
// localhost:300/success -> Success

function App() {
  return (
    <Container>
      <NavbarComponent></NavbarComponent>
      <BrowserRouter>
        <Routes>
          <Route index element={<Store />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
