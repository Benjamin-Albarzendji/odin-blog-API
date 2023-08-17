import * as React from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<h1>Create Post</h1>} />
          <Route path="/check-posts" element={<h1>Check Posts</h1>} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/logout" element={<h1>Logout</h1>} />
          <Route path="posts/:id" element={'hello'}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
