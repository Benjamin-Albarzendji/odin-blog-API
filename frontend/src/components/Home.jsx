import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import Box from '@mui/material/Box';

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/');
      const data = await response.json();
      setPosts(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        padding: '20px',
        flexWrap: 'wrap',
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        gap: '20px',
      }}
    >
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </Box>
  );
};

export default Home;
