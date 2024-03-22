import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Product from "./Product"
import AddForm from './AddForm';

function App() {

  return (
    <div className=''>
      <Router>
      <Routes>
        <Route path="/" element={<Product/>}/>
        <Route path="/form" element={<AddForm/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
