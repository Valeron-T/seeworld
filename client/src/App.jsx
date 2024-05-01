import Button from "./components/Button";
import AboutUs from "./pages/AboutUs";
import Destination from "./pages/Destination";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import ContactUs from "./pages/Contact";
import { Route, Routes } from "react-router-dom";
import Reviews from "./pages/Reviews";
// import Error404 from "./pages/Error404";

function App() {

  return (
    // Background container
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Layout />}>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="destinations" element={<Destinations/>} />
        <Route path="destinations/:id" element={<Destination/>} />
        <Route path="contact-us" element={<ContactUs />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  )
}

export default App