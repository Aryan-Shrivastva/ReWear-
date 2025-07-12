import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  RecyclingRounded as RecyclingIcon,
  SwapHoriz as SwapIcon,
  EmojiNature as EcoIcon,
  Group as CommunityIcon,
} from '@mui/icons-material';

const Landing = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <RecyclingIcon sx={{ fontSize: 40 }} />,
      title: 'Sustainable Fashion',
      description: 'Give your clothes a second life and reduce fashion waste.',
    },
    {
      icon: <SwapIcon sx={{ fontSize: 40 }} />,
      title: 'Easy Swaps',
      description: 'Exchange clothes with community members effortlessly.',
    },
    {
      icon: <EcoIcon sx={{ fontSize: 40 }} />,
      title: 'Eco-Friendly',
      description: 'Help reduce the environmental impact of fast fashion.',
    },
    {
      icon: <CommunityIcon sx={{ fontSize: 40 }} />,
      title: 'Community-Driven',
      description: 'Join a community of conscious fashion enthusiasts.',
    },
  ];

  // Mock featured items - replace with actual data
  const featuredItems = [
    {
      id: 1,
      title: 'Denim Jacket',
      image: 'https://source.unsplash.com/random/800x600/?denim-jacket',
      category: 'Outerwear',
      condition: 'Like New',
    },
    {
      id: 2,
      title: 'Summer Dress',
      image: 'https://source.unsplash.com/random/800x600/?summer-dress',
      category: 'Dresses',
      condition: 'Excellent',
    },
    {
      id: 3,
      title: 'Leather Boots',
      image: 'https://source.unsplash.com/random/800x600/?leather-boots',
      category: 'Footwear',
      condition: 'Good',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: { xs: 8, md: 12 },
          borderRadius: { xs: 0, md: '0 0 2rem 2rem' },
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                variant="h2"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Swap Clothes,
                <br />
                <span style={{ color: theme.palette.primary.main }}>
                  Save the Planet
                </span>
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{ mb: 4 }}
              >
                Join our sustainable fashion community and give your wardrobe a
                fresh start while helping the environment.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  component={RouterLink}
                  to="/register"
                  variant="contained"
                  size="large"
                  sx={{ px: 4 }}
                >
                  Join Now
                </Button>
                <Button
                  component={RouterLink}
                  to="/about"
                  variant="outlined"
                  size="large"
                  sx={{ px: 4 }}
                >
                  Learn More
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://source.unsplash.com/random/800x600/?sustainable-fashion"
                alt="Sustainable Fashion"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: '50%',
                    bgcolor: 'primary.light',
                    color: 'white',
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h6" gutterBottom>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary">
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Items Section */}
      <Box sx={{ bgcolor: 'background.paper', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ mb: 6 }}
          >
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
                    height="300"
                    image={item.image}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.category} • {item.condition}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxWidth="md" sx={{ py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            textAlign: 'center',
            bgcolor: 'primary.main',
            color: 'white',
            py: 8,
            px: 4,
            borderRadius: 4,
          }}
        >
          <Typography variant="h3" gutterBottom>
            Ready to Start Swapping?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join our community today and start your sustainable fashion journey.
          </Typography>
          <Button
            component={RouterLink}
            to="/register"
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'grey.100',
              },
              px: 6,
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Landing; 