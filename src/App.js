import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import HomeScreen from './screens/HomeScreen';
import History from './screens/History';
import ShortenLink from './screens/ShortenLink';
//We use Browse Router because we want to connect our app to URL
function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/history' element={<History />} />
          <Route path='/shortenLink' element={<ShortenLink />} />
        </Routes>
    </>
  );
}

export default App;
