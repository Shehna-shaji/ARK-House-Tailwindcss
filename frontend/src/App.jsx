import React from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaxWrapper from './Components/MaxWrapper/MaxWrapper';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div className='2xl:m-auto 2xl:max-w-[1900px]'>
    <BrowserRouter >
    <MaxWrapper>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      </MaxWrapper>
      
    </BrowserRouter>
    </div>
  )
}

export default App
