import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from './data/data';

function App() {
  const [posts, setPosts] = useState(data);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));
      setSearchResults(filteredResults.reverse());
  }, [search, posts])

  useEffect(() => {
    setPosts(data);
  }, [])

  const handleResult = (e) => {
    setSearch(e.target.value);
    navigate('/post');
  }

  return (
    <div className='App'>
      <NavbarComp search={search} handleResult={handleResult} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route path="/post" element={<NewPost posts={searchResults} />} />
        <Route path="/post/:id" element={<PostPage posts={posts}/>} />
        <Route path="/about" element={<About posts={posts}/>} />
        <Route path="*" element={<Missing/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
