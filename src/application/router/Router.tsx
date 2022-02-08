import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../../container/Home/Home";
import Login from "../../container/Login/Login";
import About from "../../container/Common/About";
import NotFound from "../../container/Common/_404";

import Header from "../../components/layouts/Header";
import Footer from "../../components/layouts/Footer";

const Router = () => (
  <BrowserRouter>
    <Header />
    <div style={{ height: 480 }}>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:username" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
  </BrowserRouter>
);

export default Router;
