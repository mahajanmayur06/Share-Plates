import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/AboutUs/Aboutus';
import Contactus from './Components/Contactus';
import Community from './Components/SignUp/community/Community';
import Distributors from './Components/Distributors';
import Navbar from './Components/Navbar/Navbar';
import Volunteers from './Components/Volunteer/Volunteer';
import Homepage from './Components/Homepage/Homepage';
import Donate from './Donate';

const App = () => {
  return (
    <div>
      <div>
        <Navbar /> 
      </div>
      <div>
        <Routes>

          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/aboutus' element={<Aboutus />} />
          <Route exact path='/contactus' element={<Contactus />} />
          <Route exact path='/volunteers' element={<Volunteers />} />
          <Route exact path='/distributors' element={<Distributors />} />
          <Route exact path='/community' element={<Community />} />
          <Route exact path='/donate' element={<Donate />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
