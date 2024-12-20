import React from 'react'
import ExpenseTracker from './components/expense-tracker/ExpenseTracker'  
import Weather from './components/weather/Weather.js'
import {Routes, Route } from 'react-router-dom';
import Home from './components/home-page/HomePage.js'
import WeatherSearch from './components/weather/weather-search/WeatherSearch.js';
import MainHeader from './components/global/header/MainHeader.js';
import Chat from './components/chat/Chat.js';
function App() {
  return (
<>
    <MainHeader />
    {/* <Home /> */}
    <Routes>
    <Route path='/' element={<Home />} exact='true'/>
        <Route path="/expense-tracker" element={<ExpenseTracker />} />
        <Route path="/weather" element={<Weather />} />
        <Route path='/weather-search' element={<WeatherSearch />} exact='true'/>
        <Route path='/chat' element={<Chat />} exact='true'/>
      </Routes>
</>
  )
}

export default App