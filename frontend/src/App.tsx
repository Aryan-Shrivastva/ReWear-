import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme';
import Navbar from './components/layout/Navbar';
import Routes from './routes';
import { Box } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.default'
          }}
        >
          <Navbar />
          <Box
            component="main"
            sx={{
              flex: 1,
              py: 4,
              px: { xs: 2, sm: 4, md: 6 }
            }}
          >
            <Routes />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
