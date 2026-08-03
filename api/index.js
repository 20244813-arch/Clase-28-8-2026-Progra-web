import express from 'express';
import 'dotenv/config';
import bootstrap from '../configs/bootstrap.js';

const app = express();

// Configurar para Vercel
app.set('trust proxy', 1);

// Inicializa toda la app
bootstrap(app);

// Exportar para Vercel
export default app;