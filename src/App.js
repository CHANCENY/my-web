import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./navfiles/Navbar";
import Home from "./Home";
import Footer from "./footerfile/Footer";
import About from "./About";
import Myprojects from "./Myprojects";
import MyContacts from "./MyContacts";
import Missing from "./Missing";
import Views from "./views/Views";
//import AddProject from "./adminfiles/AddProject";
import { DataProvider } from "./context/DataContext";

function App() {
  try {
    const page404 = `Page not found! ${__dirname}`;
    return (
      <>
        <DataProvider>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Myprojects />} />
            <Route path="/contacts" element={<MyContacts />} />
            <Route path="/view/:id" element={<Views />} />
            <Route path="*" element={<Missing page404={page404} />} />
          </Routes>

          <Footer />
        </DataProvider>
      </>
    );
  } catch (error) {
    console.log("Error: ", error.message);
  }
}

export default App;
