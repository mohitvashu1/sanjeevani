import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAppointment from './pages/MyAppointment'
import MyProfile from './pages/MyProfile'
import Doctor from './pages/Doctor'
import Appointments from './pages/Appointments'
import NavBar from './components/NavBar'
import Contact from './pages/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
         <Route path='/doctor' element={<Doctor/>} />
          <Route path='/doctor/:speciality' element={<Doctor/>} />
          <Route path='/login' element={<Login/>} />
           <Route path='/about' element={<About/>} />
            <Route path='/my-appointment' element={<MyAppointment/>} />
             <Route path='/my-profile' element={<MyProfile/>} />
               <Route path='/appointment/:docId' element={<Appointments/>} />
                 <Route path='/contact' element={<Contact/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App