// import React from 'react';
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./componants/HomeFolder/HomePage";
import LayOut from "./componants/LayOut";
import About from "./componants/Aboutfolder/About";
import Centres from "./componants/Centres";
import Orthopaedics from "./componants/HomeFolder/Orthopaedics";
import Gastro from "./componants/HomeFolder/Gastro";
import Neuro from "./componants/HomeFolder/Neuro";
import Cardiology from "./componants/HomeFolder/Cardiology";
import Ent from "./componants/HomeFolder/Ent";
import Contact from "./componants/Contactusfolder/Contact";
import Healthinformation from "./componants/Health/Healthinformation";
import Patientcare from "./componants/Patient/Patientcare";
import Bookappointment from "./componants/Appointment/Bookappointment";
import Bookappointmentone from "./componants/Appointment/Bookappointmentone";
import Patientone from "./componants/Patient/Patientone";


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/" element={<Patientone/>} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/centres" element={<Centres />} />
            <Route path="/orthopaedics" element={<Orthopaedics />} />
            <Route path="/gastro" element={<Gastro />} />
            <Route path="/neuro" element={<Neuro />} />
            <Route path="/cardiology" element={<Cardiology />} />
            <Route path="/ent" element={<Ent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/health" element={<Healthinformation />} />
            <Route path="/patient" element={<Patientcare />} />
            <Route path="/book" element={<Bookappointment />} />
            <Route path="/appointment" element={<Bookappointmentone />} />
       
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
