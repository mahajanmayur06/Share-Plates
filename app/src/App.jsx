import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutus from './Components/AboutUs/Aboutus';
import Community from './Components/Community/Community';
import Distributors from './Components/Distributors/Distributors';
import Volunteers from './Components/Volunteer/Volunteer';
import Homepage from './Components/Homepage/Homepage';
import Maps from './Components/SignUp/maps';
import RegisterForm from './Components/SignUp/Registerform'


const App = () => {


  return (
    <>
      <div>
        <Routes>

          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/aboutus' element={<Aboutus />} />
          <Route exact path='/volunteers' element={<Volunteers />} />
          <Route exact path='/distributors' element={<Distributors />} />
          <Route exact path='/community' element={<Community />} />
          <Route exact path='/register' element={<RegisterForm />} />
        </Routes>
      </div>

    </>
  );
};

export default App;