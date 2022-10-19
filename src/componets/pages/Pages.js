import { Routes, Route } from "react-router-dom";
import Home from './Home';
import NotFoundPage from './NotFoundPage';
import ContactUs from "./ContactUs";
import About from "./About";
import PalleteCreate from "./palletes/Create";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="about" element={<About />} />
      <Route path="pallete/create" element={<PalleteCreate />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default Pages
