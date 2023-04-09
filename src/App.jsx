import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
// import Error404 from "./pages/Error404";

function App() {

  return (
    // Background container
    <Routes>
      {/* <Route path="/" element={<Home />}> */}
      <Route path="/" element={<Home/>}></Route>
        {/* <Route index element={<Home />} key={"home"} />
        <Route path="about-us" element={<AboutUs />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
  )
}

export default App