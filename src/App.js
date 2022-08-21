import React from 'react';
import './App.css';
import {Routes, Route, useParams} from 'react-router-dom';
import {Home, About, ProductPage, Contacts, Nopage, Navbar,ProductList} from './pages';

function App() {
  return(
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products/:name" element={<ProductPage/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/product-list" element={<ProductList/>}/>
        <Route path="*" element={<Nopage/>}/>
      </Routes>
    </div>
  );
}


export default App;
