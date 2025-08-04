# 🚀 Deployment Guide

Esta guía explica cómo configurar y deployar el proyecto Sapient Advisors usando Vercel con GitHub Actions.

## 📋 Prerequisitos

- Cuenta en GitHub con acceso al repositorio
- Cuenta en Vercel
- Credenciales de HubSpot para staging y production

## 🏗️ Arquitectura de Deployment

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   staging       │    │   main/master   │    │   releases      │
│     branch      │    │     branch      │    │     tags        │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          ▼                      ▼                      ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   GitHub        │    │   GitHub        │    │   GitHub        │
│   Actions       │    │   Actions       │    │   Actions       │
│   (Staging)     │    │   (Production)  │    │   (Production)  │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          ▼                      ▼                      ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Vercel        │    │   Vercel        │    │   Vercel        │
│   (Staging)     │    │   (Production)  │    │   (Production)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🔧 Configuración Inicial

### 1. Configurar Vercel

1. **Crear proyecto en Vercel:**
   ```bash
   # Instalar Vercel CLI
   npm i -g vercel
   
   # Login en Vercel
   vercel login
   
   # Crear proyecto
   vercel
   ```

2. **Obtener credenciales de Vercel:**
   - Ve a tu proyecto en Vercel Dashboard
   - Settings → General → Project ID
   - Account Settings → Tokens → Create Token

### 2. Configurar GitHub Secrets

Ve a tu repositorio → Settings → Secrets and variables → Actions y añade:

#### Secrets de Vercel:
- `VERCEL_TOKEN`: Token de tu cuenta Vercel
- `VERCEL_ORG_ID`: ID de tu organización/usuario Vercel
- `VERCEL_PROJECT_ID`: ID del proyecto Vercel

#### Secrets de HubSpot Staging:
- `VITE_HUBSPOT_PORTAL_ID_STAGING`: Portal ID de staging
- `VITE_HUBSPOT_FORM_ID_STAGING`: Form ID de staging
- `VITE_HUBSPOT_API_KEY_STAGING`: API Key de staging

#### Secrets de HubSpot Production:
- `VITE_HUBSPOT_PORTAL_ID_PROD`: Portal ID de production
- `VITE_HUBSPOT_FORM_ID_PROD`: Form ID de production
- `VITE_HUBSPOT_API_KEY_PROD`: API Key de production

### 3. Configurar Variables de Entorno Locales

1. **Copiar template:**
   ```bash
   cp env.template .env.local
   ```

2. **Completar valores:**
   ```bash
   # HubSpot Configuration
   VITE_HUBSPOT_PORTAL_ID=tu_portal_id_aqui
   VITE_HUBSPOT_FORM_ID=tu_form_id_aqui
   VITE_HUBSPOT_API_KEY=tu_api_key_aqui
   ```

## 🚀 Flujo de Deployment

### Staging Deployment

1. **Push a rama staging:**
   ```bash
   git checkout staging
   git add .
   git commit -m "feat: nueva funcionalidad"
   git push origin staging
   ```

2. **Proceso automático:**
   - ✅ Lint y type checking
   - ✅ Build del proyecto
   - ✅ Deploy a Vercel staging
   - 🔗 URL de staging disponible

### Production Deployment

1. **Merge a main/master:**
   ```bash
   git checkout main
   git merge staging
   git push origin main
   ```

2. **O crear release:**
   ```bash
   git tag -a v1.0.0 -m "Release v1.0.0"
   git push origin v1.0.0
   ```

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev                    # Servidor de desarrollo
npm run build                 # Build standard
npm run build:dev             # Build para desarrollo
npm run build:staging         # Build para staging
npm run build:prod            # Build para production

# Testing y QA
npm run lint                  # Linter
npm run preview              # Preview build local
npm run preview:staging      # Preview staging build
npm run preview:prod         # Preview production build
```

## 🔍 Monitoreo y Debugging

### Logs de GitHub Actions
- Ve a tu repositorio → Actions
- Selecciona el workflow y el job específico
- Revisa los logs de cada step

### Logs de Vercel
- Ve a tu proyecto en Vercel Dashboard
- Functions → View Function Logs
- Deployments → View Build Logs

### Variables de Entorno
```bash
# Verificar variables en build
console.log('Environment:', import.meta.env.MODE);
console.log('HubSpot Portal ID:', import.meta.env.VITE_HUBSPOT_PORTAL_ID);
```

## 🛠️ Troubleshooting

### Error: "HubSpot Portal ID not configured"
- Verifica que las variables de entorno estén configuradas
- Chequea que los secrets en GitHub estén correctos
- Asegúrate de usar el prefijo `VITE_` para variables del cliente

### Error: "Vercel deployment failed"
- Verifica que `VERCEL_TOKEN` sea válido
- Confirma que `VERCEL_PROJECT_ID` y `VERCEL_ORG_ID` sean correctos
- Revisa los logs de build en Vercel

### Error: "Build failed"
- Ejecuta `npm run build:staging` localmente
- Verifica que no haya errores de TypeScript
- Asegúrate de que todas las dependencias estén instaladas

## 🌐 URLs de Ambiente

Una vez configurado, tendrás:

- **Staging**: `https://tu-proyecto-staging.vercel.app`
- **Production**: `https://tu-proyecto.vercel.app`

## 📞 Soporte

Si tienes problemas con el deployment:

1. Revisa los logs de GitHub Actions
2. Verifica las variables de entorno
3. Confirma la configuración de Vercel
4. Contacta al equipo de desarrollo

---

## 🔒 Security Notes

- Nunca commits archivos `.env` al repositorio
- Usa GitHub Secrets para información sensible
- Mantén actualizados los tokens de acceso
- Revisa regularmente los logs de acceso 