import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';

const Navbar = () => {
  // TODO: Replace with actual auth state management
  const isAuthenticated = false;
  const isAdmin = false;

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <RecyclingIcon sx={{ mr: 2 }} />
          <Typography
            variant="h6"
            component={RouterLink}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            ReWear
          </Typography>

          <Box>
            {!isAuthenticated ? (
              <>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/login"
                  sx={{ mr: 1 }}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/register"
                  variant="outlined"
                >
                  Register
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/items/add"
                  sx={{ mr: 1 }}
                >
                  List Item
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/dashboard"
                  sx={{ mr: 1 }}
                >
                  Dashboard
                </Button>
                {isAdmin && (
                  <Button
                    color="inherit"
                    component={RouterLink}
                    to="/admin"
                    sx={{ mr: 1 }}
                  >
                    Admin
                  </Button>
                )}
                <Button color="inherit">Logout</Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 