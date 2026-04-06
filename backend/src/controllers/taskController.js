const db = require('../models/taskModel');

// Mejora 1 y 2: Dividir la función grande (manejarTareas) en funciones pequeñas y específicas.
exports.getTasks = (req, res) => {
    res.status(200).json(db);
};

exports.createTask = (req, res) => {
    // Mejora 3: Renombrar variables ambiguas (t, p) por nombres claros y descriptivos.
    const { title, progress } = req.body;
    
    // Mejora adicional: Validación más robusta y legible
    if (!title || title.trim() === '') {
        return res.status(400).json({ message: "El título de la tarea es requerido" });
    }

    const newTask = {
        id: db.length + 1,
        title: title,
        progress: progress || 0,
        status: "pending"
    };
    
    db.push(newTask);
    res.status(201).json(newTask);
};