import React from "react";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaxWrapper from "./Components/MaxWrapper/MaxWrapper";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import OurHistory from "./Pages/Our History/OurHistory";
import Projects from "./Pages/Projects/Projects";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Breadcrumbs from "./Components/Breadcrumbs/Breadcrumbs";
import Contact from "./Pages/Contact/Contact";
import CentralSaintGiles from "./Pages/CentralSaintGiles/CentralSaintGiles";

const App = () => {
  return (
    <div className="2xl:m-auto 2xl:max-w-[1900px] w-full">
      <BrowserRouter>
        <MaxWrapper>
          <ScrollToTop />
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/ourhistory" element={<OurHistory />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/CentralSaintGiles" element={<CentralSaintGiles/>}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </MaxWrapper>
      </BrowserRouter>
    </div>
  );
};

export default App;
