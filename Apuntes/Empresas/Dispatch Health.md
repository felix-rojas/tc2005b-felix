#### Mesa de soporte
Para dispatch health con Bernardo Gómez

#### Contexto
Utiliza jira service para dar seguimiento https://www.atlassian.com/es/software/jira/service-management/features/service-desk
1. Gestión de tickets de soporte
2. CAtegorización de incidencias
3. Seguimiento de tickets por status
	1. Máximo 3 días de resolución
	2. Establece la resolución del problema y su categoría en importancia
4. Reportes de SLAs

### Problemas
- Todos los usuarios pueden actualizar el status de un ticket. no hay control de usuarios para modificar estatus.
- Sólo existe un solo template de ticket pues jira está hecho a lo general
- CApacidad de filtros y reportes es baja
- Es difícil generar reportes y son limitados
- Las métricas de los tiempos son poco visibles y es difícil establecer
- No hay historial de tickets con resolución. Los tickets solucionados son difísciles de encontar.
- No puedes configurar categorías.
- Problemas ya existentes, necesitas accesar a los previos
### Propuestas
Sistema de categorización de tickets:
- Por tipo de incidencia
- Por sistema
- Templates que ajusten a cada tipo de problema
- Gestión de permisos por rol de usuario
	- Usuarios que puedan generar pero no modificar
	- Usuarios que puedan editar y generar
	- Usuarios que no puedan editar los tickets
- Notificaciones por cambio de estatus
- Métrica y avisos de tiempos de respuesta

#### Ejemplo 
La parte de categorización
- problemas en generación de envío
	- No. de orden
- problemas de acceso a la plataforma
	- Usuario con problema
	- Tipo de problema de acceso
	- Notificación de reolución

El equipo de soporte es el único que puede marcar el ticket como resuelto

La métrica más importante son los tiempos de respuesta y resolución por cada categoría.

Ayuda a la gestión de los tickets, que el mismo sistema clasifique los tickets con urgencia de atención dependiendo su importancia y tiempos.

Se quiere notificar a los involucrados en el ticket de su resolución.

Utilizan correo y google chat para la comunicación dentro de la empresa.

Tienen 55 personas para el equipo de IT y son +600 personas en la empresa