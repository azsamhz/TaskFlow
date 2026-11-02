# TaskFlow
Proyecto Full Stack: Express + MongoDB/Mongoose + JWT + bcryptjs + dotenv + HTML/CSS/JavaScript.

## Requisitos
Instala Node.js LTS y MongoDB Community Server. Inicia el servicio de MongoDB.

## Instalación
1. Abre terminal en esta carpeta.
2. Ejecuta `npm install`.
3. Copia `.env.example` como `.env`.
4. Cambia `JWT_SECRET` por una clave larga y aleatoria. No compartas ni subas `.env`.
5. Ejecuta `npm run dev`.
6. Abre http://localhost:3000.

Registra un usuario y prueba crear, consultar, editar, completar y eliminar tareas.

## Estructura
`backend/server.js`: Express. `config/db.js`: conexión. `models`: esquemas. `routes`: autenticación y CRUD. `middleware`: JWT y errores. `frontend`: interfaz.

## Endpoints
POST `/api/auth/register`; POST `/api/auth/login`; GET `/api/auth/me` (JWT).
GET/POST `/api/tasks`; PUT/DELETE `/api/tasks/:id` (JWT en todas las rutas de tareas).

## Seguridad
Passwords hasheadas con bcrypt. JWT firmado con variable privada. Tareas filtradas por usuario. `.env` y `node_modules` excluidos de Git.

## Nube
Para Render se recomienda usar MongoDB Atlas y configurar `MONGODB_URI`, `JWT_SECRET`, `JWT_EXPIRES_IN` y `PORT` en el panel. No hay URL pública incluida: requiere despliegue real.
