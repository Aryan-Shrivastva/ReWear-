import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
  Grid as MuiGrid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from '@mui/material';

// Create a styled Grid component that accepts the 'item' prop
const Grid = MuiGrid as typeof MuiGrid & { item?: boolean };

const Landing = () => {
  // Mock featured items - replace with API data
  const featuredItems = [
    {
      id: 1,
      title: 'Denim Jacket',
      image: 'https://via.placeholder.com/300x200',
      condition: 'Like New',
      points: 100,
    },
    {
      id: 2,
      title: 'Summer Dress',
      image: 'https://via.placeholder.com/300x200',
      condition: 'Good',
      points: 75,
    },
    {
      id: 3,
      title: 'Sneakers',
      image: 'https://via.placeholder.com/300x200',
      condition: 'New',
      points: 150,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: 8,
          mb: 6,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Swap. Save. Sustain.
          </Typography>
          <Typography variant="h5" paragraph sx={{ mb: 4 }}>
            Join our community of conscious fashion lovers and give your clothes a
            second life while discovering unique pieces.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/register"
            sx={{ mr: 2 }}
          >
            Start Swapping
          </Button>
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            component={RouterLink}
            to="/items"
          >
            Browse Items
          </Button>
        </Container>
      </Box>

      {/* Featured Items */}
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Items
        </Typography>
        <Grid container spacing={4}>
          {featuredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                component={RouterLink}
                to={`/items/${item.id}`}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  textDecoration: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="h3">
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    Condition: {item.condition}
                  </Typography>
                  <Typography color="primary" variant="subtitle1">
                    {item.points} Points
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Landing; 