import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Image from './schemas/Image';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/ic-tcc')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error: Error) => console.error('MongoDB connection error:', error));

app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to the Image Collection API');
});

// Route to create a new Image entry
app.post('/images', async (req: Request, res: Response) => {
    try {
        const newImage: Image = new Image(req.body);
        const savedImage = await newImage.save();
        res.status(201).json(savedImage);
    } catch (error:any) {
        res.status(400).json({ message: 'Error saving image', error: error.message });
    }
});

// Route to get all images
app.get('/images', async (req: Request, res: Response) => {
    try {
        const images = await Image.find();
        res.status(200).json(images);
    } catch (error:any) {
        res.status(500).json({ message: 'Error fetching images', error: error.message });
    }
});

// Route to get a single image by ID
app.get('/images/:id', async (params: any) => {
    try {
        const image = await Image.findById(params.req.params.id);
        if (!image) {
            return params.res.status(404).json({ message: 'Image not found' });
        }
        params.res.status(200).json(image);
    } catch (error: any) {
        params.res.status(500).json({ message: 'Error fetching image', error: error.message });
    }
});

// Route to update an existing image by ID
app.put('/images/:id', async (params: any) => {
    try {
        const updatedImage = await Image.findByIdAndUpdate(params.req.params.id, params.req.body, { new: true, runValidators: true });
        if (!updatedImage) {
            return params.res.status(404).json({ message: 'Image not found' });
        }
        params.res.status(200).json(updatedImage);
    } catch (error: any) {
        params.res.status(400).json({ message: 'Error updating image', error: error.message });
    }
});

// Route to delete an image by ID
app.delete('/images/:id', async (params: any) => {
    try {
        const deletedImage = await Image.findByIdAndDelete(params.req.params.id);
        if (!deletedImage) {
            return params.res.status(404).json({ message: 'Image not found' });
        }
        params.res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error: any) {
        params.res.status(500).json({ message: 'Error deleting image', error: error.message });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

