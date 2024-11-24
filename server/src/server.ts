import express from 'express';
import mongoose from 'mongoose';
import imageRoutes from './routes/imageRoutes';
import cors from 'cors';

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001' }));

mongoose.connect('mongodb://localhost:27017/ic-tcc').then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro de conexão:', err);
});

app.use('/images', imageRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
