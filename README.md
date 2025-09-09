# Calculadora Carbono Neutral

Aplicación web para estimar la huella de carbono de eventos y generar un informe en **PDF** con los resultados y los costos de compensación.

## Características

- Estimación de emisiones de CO₂ por categoría de actividad.
- Exportación de un reporte en PDF.
- Estado global gestionado con **Zustand**.
- Formularios con validación usando **React Hook Form** y **Zod**.
- Estilos con **Tailwind CSS**.

## Tech stack

- **React + TypeScript**
- **Vite**
- **@react-pdf/renderer**

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- [npm](https://www.npmjs.com/)

## Instalación

```bash
npm install
```

## Scripts disponibles

- `npm run dev` – Inicia el servidor de desarrollo.
- `npm run build` – Genera la versión de producción.
- `npm run lint` – Ejecuta ESLint sobre el código fuente.
- `npm run preview` – Sirve la aplicación construida para pruebas locales.

## Generar PDF

El reporte final se genera mediante **@react-pdf/renderer**. Tras completar el formulario, la aplicación crea un documento PDF con el detalle de las emisiones y los costos de compensación.

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas colaborar, abre un issue o envía un pull request con tus mejoras o correcciones.
