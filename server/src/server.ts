import express from 'express';
import mongoose from 'mongoose';
import imageRoutes from './routes/imageRoutes';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

const dbName = 'ic-tcc' // Coloque aqui o nome escolhido no MongoDB para o banco
mongoose.connect(`mongodb://localhost:27017/${dbName}`).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro de conexão:', err);
});

app.use('/images', imageRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
