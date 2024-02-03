import './App.css';
import AddProduct from './Component/AddProduct';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import EditProduct from './Component/EditProduct';
import {Routes, Route} from "react-router-dom"
import * as React from 'react';


function App() {
  return (
    <>
      <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addProduct' element={<AddProduct/>}></Route>
        <Route path='/editProduct/:id'  element={<EditProduct/>}></Route>

      </Routes>
    </>
  );
}

export default App;
