# Modo de Mantenimiento - Guía de Uso

## ¿Qué es?
Se agregó un middleware temporal que permite mostrar una página de "sitio no disponible" en lugar del contenido normal del sitio.

## Cómo activar el modo de mantenimiento

1. **Opción 1 - Variables de entorno (Recomendado)**:
   - Crear o editar el archivo `.env.local` en la raíz del proyecto
   - Agregar o cambiar la línea: `VITE_MAINTENANCE_MODE=true`
   - Reiniciar el servidor de desarrollo

2. **Configuración del archivo .env.local**:
   ```env
   # Maintenance Mode (set to 'true' to enable maintenance page)
   VITE_MAINTENANCE_MODE=true
   ```

## Cómo desactivar el modo de mantenimiento

1. Editar el archivo `.env.local`
2. Cambiar la línea a: `VITE_MAINTENANCE_MODE=false`
3. Reiniciar el servidor de desarrollo

## Personalizar el mensaje

El componente de mantenimiento se encuentra en:
`src/components/MaintenancePage.tsx`

Puedes editarlo para cambiar:
- El mensaje mostrado
- Los iconos
- El diseño
- Agregar información de contacto específica

## Despliegue en producción

Para el despliegue en producción (Vercel, Netlify, etc.):
1. Configurar la variable de entorno `VITE_MAINTENANCE_MODE=true` en el panel de administración
2. Hacer rebuild/redeploy del sitio
3. Para reactivar el sitio: cambiar a `VITE_MAINTENANCE_MODE=false` y rebuild nuevamente

## Notas importantes

- El modo de mantenimiento bloquea **todas** las rutas del sitio
- Se mantienen los toasters y tooltips funcionando por si se necesitan
- El diseño es responsive y se ve bien en mobile y desktop
- El mensaje es genérico y profesional, ideal para situaciones temporales

## Para el futuro

Si el plazo se extiende, se puede modificar fácilmente el componente `MaintenancePage.tsx` para mostrar un mensaje más específico como "Payment Failed" o información más detallada sobre cuándo estará disponible nuevamente.