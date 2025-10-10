import "./App.css";
import NavbarComponent from "./componets/navbar/NavbarComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./componets/home/HomeComponent";
import AboutUs from "./componets/aboutUs/AboutUs";
import ContactUs from "./componets/contactUs/ContactUs";
import FooterComponent from "./componets/footer/FooterComponent";

function App() {
  return (
    <>
      <NavbarComponent />
      <BrowserRouter>
        <Routes>
          <>
            <Route path="home" element={<HomeComponent />} />
            <Route path="aboutUs" element={<AboutUs />} />
            <Route path="contactUs" element={<ContactUs />} />
          </>
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </>
  );
}

export default App;
