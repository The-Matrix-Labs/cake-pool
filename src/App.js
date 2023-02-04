import React, { useState } from 'react'
import LoadingPage from './Components/LoadingPage'
import Navbar from './Components/Navbar'
import HomePage from './Components/HomePage'
import './style.css'
export default function App() {
  const [navColor, setnavColor] = useState("#01252A");
  const [textColor, settextColor] = useState('white');
  const [about, setabout] = useState(false)
  const [tokenomics, settokenomics] = useState(false)
  const [future, setfuture] = useState(false)
  const [scrollTo, setscrollTo] = useState(false)
  // const [moveLoadingPage, setmoveLoadingPage] = useState(false);
  return (
    <div>
        <Navbar backGround={navColor} textColor={textColor} setabout={setabout} settokenomics={settokenomics} setfuture={setfuture}/>
        <LoadingPage changeNav={setnavColor} settextColor={settextColor} setscrollTo={setscrollTo}/>
        <HomePage changeNav={setnavColor} settextColor={settextColor} about={about} tokenomics={tokenomics} future={future} setabout={setabout} settokenomics={settokenomics} setfuture={setfuture} scrollTo={scrollTo} setscrollTo={setscrollTo}/>

    </div>
  )
}
