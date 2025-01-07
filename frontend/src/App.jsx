import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AddEditUser, Home, ViewUser} from "./pages/index.js";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <div >
        <Header />
        <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adduser" element={<AddEditUser />} />
            <Route path="/update/:id" element={<AddEditUser />} />
            <Route path="/view/:id" element={<ViewUser />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
