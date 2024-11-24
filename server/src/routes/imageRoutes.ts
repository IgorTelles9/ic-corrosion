import express from 'express';
import Image from '../models/Image';

const router = express.Router();

// Cadastrar uma imagem
router.post('/', async (req, res) => {
    try {
        const image = new Image(req.body);
        const savedImage = await image.save();
        res.status(201).json(savedImage);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

export default router;
