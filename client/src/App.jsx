import Button from "./components/Button";
import AboutUs from "./pages/AboutUs";
import Destination from "./pages/Destination";
import Destinations from "./pages/Destinations";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
// import Error404 from "./pages/Error404";

function App() {

  return (
    // Background container
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/" element={<Layout />}>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="destinations" element={<Destinations/>} />
        <Route path="destinations/:destination" element={<Destination/>} />
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  )
}

export default App