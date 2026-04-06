Proyecto de Gestión de Tareas - Examen Final

Actividad 2: Identificación de estructura y arquitectura del sistema

1. ¿Qué tipo de arquitectura tiene el proyecto base?

Actualmente, el proyecto tiene una arquitectura Cliente-Servidor simple con un backend de estilo monolítico básico. Aunque existen carpetas creadas para separar responsabilidades, el código funcional del backend (como en `main.js` y `taskController.js`) mezcla lógica de enrutamiento, validación y acceso a datos, lo que rompe con el principio de responsabilidad única.

2. ¿Qué módulos o componentes identifica?
Se identifican tres componentes principales:
* Frontend (Cliente): Interfaz de usuario estática construida con HTML, CSS y JavaScript para la interacción directa.
* Backend (Servidor/API): API RESTful desarrollada en Node.js con Express, que expone endpoints para gestionar las tareas.
* Base de Datos (Almacenamiento): Un esquema relacional en SQL (`schema.sql`) para la persistencia de datos (actualmente simulada en memoria en el modelo).

3. ¿Qué mejoras arquitectónicas propondrías para hacerlo más mantenible?
Para escalar este sistema de manera profesional, propongo las siguientes mejoras:
* Implementar Arquitectura por Capas Estricta: Separar definitivamente las Rutas (endpoints), Controladores (lógica HTTP), Servicios (reglas de negocio) y Repositorios (acceso a la base de datos).
* Centralizar la Configuración: Usar variables de entorno (archivo `.env`) para manejar puertos y cadenas de conexión a la base de datos.
* Manejo de Errores Global: Crear un middleware en Express para capturar y formatear los errores, evitando que el servidor se caiga y devolviendo respuestas HTTP consistentes.