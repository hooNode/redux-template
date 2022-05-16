import { BrowserRouter, Route, Routes } from "react-router-dom";
import { withAuth } from "./hoc/isAuth";
import { Landing, Login, Register } from "./pages";
import Footer from "./layout/Footer/Footer.Container";
import Navbar from "./layout/Navbar/Navbar.Container";

function App() {
  // 4. 권한분기

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
