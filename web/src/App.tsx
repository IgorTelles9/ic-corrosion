import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
  MenuItem
} from '@mui/material';

const App = () => {
  const [formData, setFormData] = useState({
    path: '',
    resolution: { width: '', height: '' },
    format: '',
    original_image_id: '',
    source_url: '',
    details: { object_type: '', environment: '', material: '' },
    degradation: { level: '', type: '' },
    augmentation_id: '',
    notes: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const [parent, child] = name.split('.');
    if (child) {
      setFormData((prev: any) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Image successfully registered!');
        setFormData({
          path: '',
          resolution: { width: '', height: '' },
          format: '',
          original_image_id: '',
          source_url: '',
          details: { object_type: '', environment: '', material: '' },
          degradation: { level: '', type: '' },
          augmentation_id: '',
          notes: '',
        });
      } else {
        alert('Falha ao cadastrar imagem');
      }
    } catch (error) {
      alert('Falha ao cadastrar imagem');
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Cadastrar imagem
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Path"
                name="path"
                value={formData.path}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Width"
                name="resolution.width"
                value={formData.resolution.width}
                onChange={handleChange}
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Height"
                name="resolution.height"
                value={formData.resolution.height}
                onChange={handleChange}
                type="number"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Format"
                name="format"
                value={formData.format}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Original Image ID"
                name="original_image_id"
                value={formData.original_image_id}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Source URL"
                name="source_url"
                value={formData.source_url}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Object Type"
                name="details.object_type"
                value={formData.details.object_type}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Environment"
                name="details.environment"
                value={formData.details.environment}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Material"
                name="details.material"
                value={formData.details.material}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Degradation Level"
                name="degradation.level"
                value={formData.degradation.level}
                onChange={handleChange}
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Degradation Type"
                name="degradation.type"
                value={formData.degradation.type}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Augmentation ID"
                name="augmentation_id"
                value={formData.augmentation_id}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                fullWidth
                multiline
                rows={4}
              />
            </Grid>
          </Grid>
          <Box sx={{ mt: 4 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default App;
