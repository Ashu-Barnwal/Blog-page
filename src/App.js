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
  const [posts, setPosts] = useState([
    {
      id: 1,
      date: "August 01, 2020",
      title: "My first post",
      img1:'http://norlin.anvodstudio.com/content/images/2020/11/11.jpg',
      img2:'http://norlin.anvodstudio.com/content/images/2020/11/612.jpg',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non,",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non, iusto, ad amet ipsam quisquam inventore cupiditate perspiciatis tempore esse. Asperiores deleniti neque earum quia harum!"
    },
    {
      id: 2,
      date: "December 15, 2020",
      title: "My second post",
      img1:'http://norlin.anvodstudio.com/content/images/2020/11/12.jpg',
      img2:'http://norlin.anvodstudio.com/content/images/2020/11/614.jpg',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non,",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non, iusto, ad amet ipsam quisquam inventore cupiditate perspiciatis tempore esse. Asperiores deleniti neque earum quia harum!"
    },
    {
      id: 3,
      date: "March 09, 2021",
      title: "My third post",
      img1:'http://norlin.anvodstudio.com/content/images/2020/11/06.jpg',
      img2:'http://norlin.anvodstudio.com/content/images/2020/11/605.jpg',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non,",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non, iusto, ad amet ipsam quisquam inventore cupiditate perspiciatis tempore esse. Asperiores deleniti neque earum quia harum!"
    },
    {
      id: 4,
      date: "July 23, 2021",
      title: "My fourth post",
      img1:'http://norlin.anvodstudio.com/content/images/2020/11/16.jpg',
      img2:'http://norlin.anvodstudio.com/content/images/2020/11/609.jpg',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non,",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non, iusto, ad amet ipsam quisquam inventore cupiditate perspiciatis tempore esse. Asperiores deleniti neque earum quia harum!"
    },
    {
      id: 5,
      date: "November 23, 2021",
      title: "My fifth post",
      img1:'http://norlin.anvodstudio.com/content/images/2020/11/10.jpg',
      img2:'http://norlin.anvodstudio.com/content/images/2020/11/611.jpg',
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non,",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ea excepturi odio nulla non, iusto, ad amet ipsam quisquam inventore cupiditate perspiciatis tempore esse. Asperiores deleniti neque earum quia harum!"
    }
  ]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className='App'>
      <NavbarComp search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post" element={<NewPost posts={posts} />} />
        <Route path="/post/:id" element={<PostPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
