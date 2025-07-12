import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Paper,
  Typography,
  Grid,
  Box,
  Button,
  Chip,
  ImageList,
  ImageListItem,
} from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import StarIcon from '@mui/icons-material/Star';

const ItemDetail = () => {
  const { id } = useParams();

  // Mock item data - replace with API data
  const item = {
    id: 1,
    title: 'Denim Jacket',
    description: 'Classic denim jacket in excellent condition. Perfect for casual wear.',
    category: 'Outerwear',
    type: 'Jacket',
    size: 'M',
    condition: 'Like New',
    images: [
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
      'https://via.placeholder.com/600x400',
    ],
    pointValue: 100,
    owner: {
      name: 'John Doe',
      rating: 4.5,
      itemsListed: 10,
    },
    status: 'available',
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={4}>
        {/* Images */}
        <Grid item xs={12} md={8}>
          <ImageList variant="quilted" cols={2} rowHeight={300}>
            {item.images.map((image, index) => (
              <ImageListItem key={index} cols={index === 0 ? 2 : 1}>
                <img src={image} alt={`${item.title} view ${index + 1}`} />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>

        {/* Item Details */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              {item.title}
            </Typography>
            
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" color="primary" gutterBottom>
                <StarIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                {item.pointValue} Points
              </Typography>
              <Chip
                label={item.status}
                color={item.status === 'available' ? 'success' : 'warning'}
                sx={{ mt: 1 }}
              />
            </Box>

            <Typography variant="body1" paragraph>
              {item.description}
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" gutterBottom>
                Category: {item.category}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Type: {item.type}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Size: {item.size}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Condition: {item.condition}
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              startIcon={<SwapHorizIcon />}
              size="large"
            >
              Request Swap
            </Button>
          </Paper>

          {/* Owner Info */}
          <Paper sx={{ p: 3, mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Listed by
            </Typography>
            <Typography variant="subtitle1">
              {item.owner.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.owner.itemsListed} items listed
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ItemDetail; 