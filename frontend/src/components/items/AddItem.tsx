import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid as MuiGrid,
  MenuItem,
  Box,
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Create a styled Grid component that accepts the 'item' prop
const Grid = MuiGrid as typeof MuiGrid & { item?: boolean };

const validationSchema = yup.object({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
  category: yup.string().required('Category is required'),
  type: yup.string().required('Type is required'),
  size: yup.string().required('Size is required'),
  condition: yup.string().required('Condition is required'),
  pointValue: yup
    .number()
    .required('Point value is required')
    .min(0, 'Point value must be positive'),
});

const categories = [
  'Tops',
  'Bottoms',
  'Dresses',
  'Outerwear',
  'Accessories',
  'Shoes',
  'Other',
];

const conditions = ['New', 'Like New', 'Good', 'Fair'];

const AddItem = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
      category: '',
      type: '',
      size: '',
      condition: '',
      pointValue: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // TODO: Implement item creation logic
      console.log('Form values:', values);
      console.log('Selected images:', selectedImages);
    },
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setSelectedImages(files);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          List a New Item
        </Typography>

        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                component="label"
                startIcon={<CloudUploadIcon />}
                fullWidth
                sx={{ height: '100px' }}
              >
                Upload Images
                <input
                  type="file"
                  hidden
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </Button>
              {selectedImages.length > 0 && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {selectedImages.length} images selected
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="title"
                name="title"
                label="Title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.description && Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="category"
                name="category"
                label="Category"
                select
                value={formik.values.category}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.category && Boolean(formik.errors.category)}
                helperText={formik.touched.category && formik.errors.category}
              >
                {categories.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="type"
                name="type"
                label="Type"
                value={formik.values.type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.type && Boolean(formik.errors.type)}
                helperText={formik.touched.type && formik.errors.type}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="size"
                name="size"
                label="Size"
                value={formik.values.size}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.size && Boolean(formik.errors.size)}
                helperText={formik.touched.size && formik.errors.size}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="condition"
                name="condition"
                label="Condition"
                select
                value={formik.values.condition}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.condition && Boolean(formik.errors.condition)
                }
                helperText={formik.touched.condition && formik.errors.condition}
              >
                {conditions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="pointValue"
                name="pointValue"
                label="Point Value"
                type="number"
                value={formik.values.pointValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.pointValue && Boolean(formik.errors.pointValue)
                }
                helperText={formik.touched.pointValue && formik.errors.pointValue}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                <Button variant="outlined" color="secondary">
                  Cancel
                </Button>
                <Button variant="contained" color="primary" type="submit">
                  List Item
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default AddItem; 