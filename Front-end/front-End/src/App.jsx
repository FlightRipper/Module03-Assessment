// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useState, useEffect } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import ArticlesPage from './pages/showAll/ShowAll.jsx';
import ShowOne from './pages/ShowOne/ShowOne.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/articles" element={<ArticlesPage />} />  
        {/* <Route path="/article" element={<ShowOne />} />   */}
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
