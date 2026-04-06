const express = require('express');
const cors = require('cors');
const taskCtrl = require('./controllers/taskController');

const app = express();
app.use(cors());
app.use(express.json());

// Mejora: Rutas limpias que apuntan a métodos específicos del controlador, no a un "todo en uno"
app.get('/api/tasks', taskCtrl.getTasks);
app.post('/api/tasks', taskCtrl.createTask);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});