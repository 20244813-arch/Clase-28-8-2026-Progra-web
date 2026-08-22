const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.json({ message: '¡API funcionando!' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.get('/api/users', (req, res) => {
  res.json([
    { id: 1, name: 'Juan' },
    { id: 2, name: 'María' },
  ]);
});

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

module.exports = app;