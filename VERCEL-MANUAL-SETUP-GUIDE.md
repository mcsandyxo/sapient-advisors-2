# 🚀 Guía Paso a Paso: Configuración Manual de Vercel

## ✅ **DEPLOYMENT COMPLETADO:**
- **Sitio actualizado**: https://sapient-advisors-2.vercel.app/
- **Cambio aplicado**: Fede Crespo - "Tech Leader" ✅
- **DNS configurado**: sapient-advisors.com apunta a Vercel ✅

---

## 🌐 **CONFIGURACIÓN MANUAL DE DOMINIO EN VERCEL**

### **📍 Paso 1: Acceder al Dashboard de Vercel**
1. **Ir a**: https://vercel.com/
2. **Login** con tu cuenta (GitHub)
3. **Seleccionar** tu proyecto: `sapient-advisors-2`

### **📍 Paso 2: Ir a Settings del Proyecto**
1. En tu proyecto, hacer clic en **"Settings"** (pestaña superior)
2. En el menú lateral, hacer clic en **"Domains"**

### **📍 Paso 3: Agregar Dominio Principal**
1. **Hacer clic** en **"Add Domain"** o **"Add"**
2. **Escribir**: `sapient-advisors.com`
3. **Hacer clic** en **"Add"**
4. Vercel mostrará el estado de verificación

### **📍 Paso 4: Agregar Subdominio WWW**
1. **Hacer clic** nuevamente en **"Add Domain"**
2. **Escribir**: `www.sapient-advisors.com`
3. **Hacer clic** en **"Add"**
4. Vercel mostrará el estado de verificación

### **📍 Paso 5: Verificar DNS (Opcional)**
Si Vercel pide verificación:
1. **Mostrar** que ya configuraste los DNS en Wix:
   - `sapient-advisors.com` → A record → `76.76.19.61`
   - `www.sapient-advisors.com` → CNAME → `cname.vercel-dns.com`
2. **Hacer clic** en **"Verify"** o **"Refresh"**

---

## 🔧 **CONFIGURACIÓN AVANZADA (Si es necesaria)**

### **🌐 Configurar Redirects (Opcional)**
En Settings → **"Functions"** → **"Redirects"**:
```
www.sapient-advisors.com → sapient-advisors.com (301)
```

### **🔒 Configurar SSL (Automático)**
Vercel configurará SSL automáticamente una vez que verifique el dominio.

### **⚙️ Variables de Entorno (Ya configuradas)**
En Settings → **"Environment Variables"**:
- ✅ `VITE_HUBSPOT_PORTAL_ID`: `242128623`
- ✅ `VITE_HUBSPOT_FORM_ID`: `c18f283e-835c-48f7-a809-01b4a64b2802`
- ✅ `VITE_HUBSPOT_API_KEY`: (configurada)

---

## 📊 **VERIFICACIÓN POST-CONFIGURACIÓN**

### **🔍 Comandos de Verificación:**
```bash
# Verificar DNS
dig +short sapient-advisors.com
dig +short www.sapient-advisors.com

# Probar conectividad
curl -I https://sapient-advisors.com
curl -I https://www.sapient-advisors.com
```

### **✅ Resultados Esperados:**
- **sapient-advisors.com** → `76.76.19.61`
- **www.sapient-advisors.com** → IPs de Vercel
- **HTTPS funcionando** en ambos dominios
- **Contenido**: Tu aplicación React (no Wix)

---

## ⏱️ **TIEMPOS DE PROPAGACIÓN**

### **📈 Progreso Actual:**
- ✅ **DNS configurado** en Wix
- ✅ **Aplicación deployada** en Vercel
- ⏳ **Propagación DNS**: 2-24 horas
- ⏳ **Verificación Vercel**: Dependiente de propagación

### **🚀 Estados Esperados:**
1. **0-2 horas**: DNS parcialmente propagado
2. **2-6 horas**: DNS completamente propagado
3. **6-24 horas**: Vercel reconoce dominio automáticamente
4. **24+ horas**: Configuración completa y estable

---

## 🛠️ **TROUBLESHOOTING**

### **❌ Si Vercel no reconoce el dominio:**
1. **Esperar 24-48 horas** para propagación completa
2. **Verificar DNS** con herramientas online: https://dnschecker.org/
3. **Contactar soporte** de Vercel si persiste

### **❌ Si el sitio muestra contenido de Wix:**
1. **Limpiar caché** del navegador
2. **Probar en modo incógnito**
3. **Esperar más tiempo** para propagación

### **❌ Si hay errores SSL:**
1. **Esperar** que Vercel genere certificados automáticamente
2. **Verificar** que ambos dominios estén agregados
3. **Reintentar** después de 1-2 horas

---

## 📞 **RECURSOS ADICIONALES**

### **🌐 URLs Importantes:**
- **Dashboard Vercel**: https://vercel.com/dashboard
- **Documentación DNS**: https://vercel.com/docs/projects/domains
- **Verificador DNS**: https://dnschecker.org/

### **📱 Contacto Soporte:**
- **Vercel Support**: https://vercel.com/help
- **Documentación**: https://vercel.com/docs

---

## 🎯 **ESTADO ACTUAL DEL PROYECTO**

### **✅ Completado:**
- ✅ Aplicación React deployada y funcionando
- ✅ DNS configurado correctamente en Wix
- ✅ Perfil de Phanom oculto
- ✅ Formulario HubSpot verificado y funcionando
- ✅ Título actualizado: Fede Crespo → "Tech Leader"
- ✅ Propagación DNS iniciada

### **⏳ En Proceso:**
- ⏳ Propagación DNS completa (2-24 horas)
- ⏳ Verificación automática de dominio en Vercel
- ⏳ Generación de certificados SSL

### **🎉 Resultado Final Esperado:**
- **https://sapient-advisors.com** → Tu aplicación React
- **https://www.sapient-advisors.com** → Tu aplicación React
- **SSL activo** en ambos dominios
- **Performance optimizada** vs sitio anterior en Wix

---

**¡La migración está prácticamente completa! Solo falta que la propagación DNS termine y Vercel reconozca automáticamente el dominio.** 🚀
