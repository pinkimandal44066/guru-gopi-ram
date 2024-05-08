// import React from 'react'
// import HomePage from './componants/HomeFolder/HomePage'

// const App = () => {
//   return (
//     <div className=''>
//       <HomePage />
//     </div>
//   )
// }

// export default App

























import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './componants/HomeFolder/HomePage';
import LayOut from './componants/LayOut';
import About from './componants/Aboutfolder/About';
import Centres from './componants/Centres';
import Orthopaedics from './componants/HomeFolder/Orthopaedics';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route path="/" element={<HomePage />} />
         
          <Route path='/about' element={<About />} /> 
          <Route path='/centres' element={<Centres />} /> 
          <Route path='/orthopaedics' element={<Orthopaedics />} /> 
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

