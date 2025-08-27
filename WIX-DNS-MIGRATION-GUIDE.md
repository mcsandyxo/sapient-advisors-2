# 🌐 Guía de Migración DNS: Wix → Vercel

## 📊 **Configuración Actual Detectada**

- **Dominio**: `sapient-advisors.com`
- **Sitio actual**: https://www.sapient-advisors.com/
- **Registrar**: Wix.com Ltd.
- **Nameservers actuales**: 
  - `ns2.wixdns.net`
  - `ns3.wixdns.net`
- **IP actual (www)**: `34.149.87.45` (Wix)

## 🎯 **Objetivo de Migración**

- **Sitio nuevo**: https://sapient-advisors-2.vercel.app/
- **Dominio objetivo**: https://www.sapient-advisors.com/
- **Plataforma**: Vercel
- **Nameservers objetivo**:
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`

---

## 📋 **PASO A PASO EN WIX**

### **🔐 Paso 1: Acceder al Panel de Wix**
1. Ir a: https://www.wix.com/
2. Hacer login con tu cuenta
3. Ir a **"Mi Cuenta"** → **"Dominios"**

### **🌐 Paso 2: Configurar DNS**
1. Buscar: **`sapient-advisors.com`**
2. Hacer clic en **"Gestionar DNS"** o **"Configuración avanzada"**
3. Buscar la sección **"Nameservers"**

### **⚙️ Paso 3: Cambiar Nameservers (OPCIÓN RECOMENDADA)**

#### **Configuración actual:**
```
ns2.wixdns.net
ns3.wixdns.net
```

#### **Cambiar a:**
```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

### **🔄 Paso 3 ALTERNATIVO: Solo Registros A/CNAME**

Si prefieres mantener Wix como DNS y solo cambiar registros específicos:

#### **Registros a cambiar:**
- **Registro A** `@` (root domain):
  - **Actual**: `185.230.63.107, 185.230.63.186, 185.230.63.171`
  - **Nuevo**: `76.76.19.61`

- **Registro CNAME** `www`:
  - **Actual**: `cdn1.wixdns.net`
  - **Nuevo**: `cname.vercel-dns.com`

---

## ⚡ **DESPUÉS DE CONFIGURAR EN WIX**

### **🚀 Ejecutar Script Automático:**
```bash
cd /Users/federicocrespo/sapient-advisors-2
./dns-migration-commands.sh
```

### **📋 Lo que hace el script:**
1. ✅ Agrega `sapient-advisors.com` a Vercel
2. ✅ Agrega `www.sapient-advisors.com` a Vercel  
3. ✅ Configura registros DNS en Vercel
4. ✅ Crea aliases para ambos dominios
5. ✅ Verifica la configuración

---

## ⏱️ **TIEMPOS ESPERADOS**

- **Configuración en Wix**: 2-3 minutos
- **Ejecución del script**: 1-2 minutos
- **Propagación DNS**: 2-24 horas
- **Verificación completa**: 24-48 horas

---

## 🔍 **VERIFICACIÓN POST-MIGRACIÓN**

### **Comandos de verificación:**
```bash
# Verificar propagación DNS
dig +short sapient-advisors.com
dig +short www.sapient-advisors.com

# Verificar certificados SSL
curl -I https://sapient-advisors.com
curl -I https://www.sapient-advisors.com

# Verificar dominios en Vercel
vercel domains ls
```

### **✅ Resultados esperados:**
- **sapient-advisors.com** → `76.76.19.61`
- **www.sapient-advisors.com** → IP de Vercel
- **HTTPS funcionando** en ambos dominios
- **Redirección automática** www → non-www (o viceversa)

---

## 🚨 **TROUBLESHOOTING**

### **Si el script falla:**
```bash
# Verificar autenticación Vercel
vercel whoami

# Re-login si es necesario
vercel login

# Ejecutar comandos uno por uno
vercel domains add sapient-advisors.com sapient-advisors-2
```

### **Si DNS no propaga:**
- Esperar 24-48 horas
- Usar herramientas online: https://dnschecker.org/
- Verificar configuración en Wix

---

## 📞 **SOPORTE**

Si encuentras problemas:
1. Verificar configuración en panel Wix
2. Revisar logs del script
3. Contactar soporte Vercel si es necesario

**¡La migración preservará todo el contenido y funcionalidad del sitio!** 🎯
