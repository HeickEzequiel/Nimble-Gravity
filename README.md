# Nimble Gravity Challenge

Aplicación fullstack construida como resolución del challenge técnico.
Incluye un frontend en React y un backend en Node.js que actúa como capa de comunicación con la API externa.

---

## 🚀 Stack utilizado

### Frontend

* React + Vite
* Tailwind CSS
* Custom hooks
* Arquitectura modular por componentes

### Backend

* Node.js
* Express
* Controladores y rutas separadas
* Proxy hacia API externa

---

## 📁 Estructura del proyecto

```
Client/   → Frontend React
Server/   → Backend Express
```

La separación permite escalar y mantener responsabilidades claras entre interfaz y lógica de servidor.

---

## ⚙️ Instalación

### Backend

```
cd Server
npm install
npm run dev
```

### Frontend

```
cd Client
npm install
npm run dev
```

---

## 🔍 Experiencia de debugging — Aprendizaje clave

Durante la integración con la API externa surgió un problema donde las solicitudes fallaban sin un error claro.

Luego de investigar:

* Revisé estructura de requests
* Analicé documentación
* Comparé headers y parámetros
* Probé diferentes configuraciones

Finalmente descubrí que la API requería un `applicationId` específico para validar las peticiones.

Este proceso reforzó varios conceptos importantes:

* Leer documentación crítica cuidadosamente
* Validar cada parámetro enviado
* No asumir que los errores siempre son explícitos
* Usar debugging sistemático en lugar de prueba aleatoria

Resolver este bloqueo permitió completar la integración correctamente y dejó una experiencia valiosa sobre trabajo con APIs externas.

---

## 🎯 Objetivo del proyecto

Demostrar:

* Arquitectura fullstack limpia
* Consumo de APIs externas
* Manejo de estados en frontend
* Organización modular
* Resolución de problemas reales

---

## ✅ Estado

Proyecto funcional y estructurado para facilitar lectura, ejecución y evaluación.

---

## ✍ Autor

Desarrollado como challenge técnico y ejercicio de aprendizaje en integración de servicios externos y arquitectura fullstack.
