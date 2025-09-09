# Calculadora Carbono Neutral

Calculadora para estimar la huella de carbono de eventos y generar un **PDF** con resultados y costos de compensación.

> **Fuente de datos**: `CCN_borrador.xlsx` (hojas: `Base de datos`, `Evento`, `Referencias`).

## Tech stack

- **React + TypeScript**
- **Zustand** (estado global)
- **React Hook Form + Zod** (formularios y validación)
- **@react-pdf/renderer** (exportar PDF)
- **Vite** (bundler)
- **Tailwind** (estilos)

## Estructura

```bash
eco-calculadora/
├─ public/
│  ├─ logo.png
│  └─ vite.svg
├─ src/
│  ├─ app/
│  │  ├─ store.ts                # Zustand (estado global)
│  │  ├─ schemas.ts              # Zod: validación por sección + AppSchema
│  │  └─ types.ts                # Tipos compartidos (AppData, Results, etc.)
│  ├─ utils/
│  │  ├─ calculations.ts         # fórmulas (lee factors + datos → resultados)
│  │  ├─ format.ts               # helpers de formato (números, unidades, fechas)
│  ├─ components/
│  │  ├─ Sidebar.tsx
│  │  ├─ Header.tsx
│  │  ├─ InputField.tsx          # input controlado para RHF
│  │  ├─ DynamicTable.tsx        # tabla editable (si la usas)
│  │  └─ ReportDisplay.tsx       # vista de resultados (previa al PDF)
│  │  └─ FormSections/
│  │     ├─ GeneralSection.tsx
│  │     ├─ TransportSection.tsx
│  │     ├─ FoodSection.tsx
│  │     ├─ EnergySection.tsx
│  │     ├─ MaterialsSection.tsx
│  │     └─ WasteSection.tsx
│  ├─ pdf/
│  │  ├─ PdfDoc.tsx              # @react-pdf/renderer: documento final
│  │  └─ PdfStyles.ts            # estilos reutilizables del PDF
│  ├─ pages/
│  │  └─ CalculatorPage.tsx      # layout: sidebar izquierda + contenido derecha
│  ├─ App.tsx
│  ├─ main.tsx
│  └─ index.css
```
