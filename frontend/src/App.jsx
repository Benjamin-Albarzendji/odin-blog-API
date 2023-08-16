import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';

function App() {
  const [posts, setPosts] = useState([]);

  console.log('hello');

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('http://localhost:3000/');
      // const data = await response.json();
      // setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/create-post" element={<h1>Create Post</h1>} />
          <Route path="/check-posts" element={<h1>Check Posts</h1>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
