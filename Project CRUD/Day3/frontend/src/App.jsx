// import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, ViewUser } from "./pages/index.js";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
    
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/adduser" element={<AddEditUser />} /> */}
            {/* <Route path="/update/:id" element={<AddEditUser />} />  */}
            <Route path="/view/:id" element={<ViewUser />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
