import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, width: '100%', marginBottom: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link sx={{ color: 'white' }} href="/">
              Odin-Blog
            </Link>
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '90%',
            }}
          >
            <Box>
              <Button color="inherit">
                {' '}
                <Link sx={{ color: 'White' }} href="/">
                  Home
                </Link>
              </Button>

              <Button color="inherit">
                {' '}
                <Link sx={{ color: 'White' }} href="/create_post">
                  Create Post
                </Link>
              </Button>
              <Button color="inherit">
                {' '}
                <Link sx={{ color: 'White' }} href="/check_posts">
                  Check Posts
                </Link>
              </Button>
            </Box>
            <Box>
              <Button color="inherit">
                {' '}
                <Link sx={{ color: 'White' }} href="/logout">
                  Logout
                </Link>
              </Button>
              <Button color="inherit">
                {' '}
                <Link sx={{ color: 'White' }} href="/login">
                  Login
                </Link>
              </Button>
              <Button color="inherit">
                {' '}
                <Link sx={{ color: 'White' }} href="/signup">
                  Sign-Up
                </Link>
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
