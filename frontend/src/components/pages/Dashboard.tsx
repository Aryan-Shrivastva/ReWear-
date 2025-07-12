import React from 'react';
import {
  Container,
  Grid as MuiGrid,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';

// Create a styled Grid component that accepts the 'item' prop
const Grid = MuiGrid as typeof MuiGrid & { item?: boolean };

const Dashboard = () => {
  // Mock user data - replace with API data
  const user = {
    name: 'John Doe',
    points: 250,
    itemsListed: 5,
    swapsCompleted: 3,
  };

  // Mock items data - replace with API data
  const userItems = [
    {
      id: 1,
      title: 'Denim Jacket',
      image: 'https://via.placeholder.com/300x200',
      status: 'available',
      points: 100,
    },
    {
      id: 2,
      title: 'Summer Dress',
      image: 'https://via.placeholder.com/300x200',
      status: 'pending',
      points: 75,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* User Stats */}
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" gutterBottom>
              Welcome, {user.name}!
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 2,
              }}
            >
              <StarIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="h4">{user.points}</Typography>
              <Typography variant="subtitle1" sx={{ ml: 1 }}>
                Points
              </Typography>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography variant="body1" gutterBottom>
                Items Listed: {user.itemsListed}
              </Typography>
              <Typography variant="body1">
                Swaps Completed: {user.swapsCompleted}
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Active Swaps */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Active Swaps
            </Typography>
            <Typography variant="body1" color="text.secondary">
              No active swap requests at the moment.
            </Typography>
          </Paper>
        </Grid>

        {/* User's Items */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3,
              }}
            >
              <Typography variant="h6">Your Items</Typography>
              <Button
                variant="contained"
                startIcon={<SwapHorizIcon />}
                color="primary"
              >
                List New Item
              </Button>
            </Box>
            <Grid container spacing={3}>
              {userItems.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.image}
                      alt={item.title}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        {item.title}
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <Typography color="primary" variant="subtitle1">
                          {item.points} Points
                        </Typography>
                        <Chip
                          label={item.status}
                          color={item.status === 'available' ? 'success' : 'warning'}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 