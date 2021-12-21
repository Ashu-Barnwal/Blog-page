import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import { Routes, Route, Link, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className='App'>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post" element={<NewPost/>} />
        <Route path="/post/:id" element={<PostPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
