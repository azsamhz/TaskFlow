# API REST TaskFlow
Base: http://localhost:3000

| Método | Endpoint | Acceso | Uso |
|---|---|---|---|
| POST | /api/auth/register | Público | Crear usuario |
| POST | /api/auth/login | Público | Iniciar sesión y obtener JWT |
| GET | /api/auth/me | JWT | Consultar usuario |
| GET | /api/tasks | JWT | Listar tareas propias |
| POST | /api/tasks | JWT | Crear tarea |
| PUT | /api/tasks/:id | JWT | Actualizar tarea |
| DELETE | /api/tasks/:id | JWT | Eliminar tarea |

Las rutas privadas reciben `Authorization: Bearer <token>`. Cada tarea se consulta o modifica solo si pertenece al usuario autenticado.
