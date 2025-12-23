# relatos-de-papel

Base React (Vite) + Bootstrap.

## Requisitos
- Node 22+
- npm 10+

## Instalar
```bash
npm install 
```

## Ejecutar dev
```bash
npm run dev
```
## Estructura de caprteas sugerida
relatos-de-papel/
  public/                   # Estáticos servidos tal cual (opcional)
  src/
    assets/                 # Imágenes, íconos, fuentes, etc.
    components/             # Componentes reutilizables (Navbar, Card, Button...)
    pages/                  # Pantallas/vistas (Home, About, Login...)
    services/               # Consumo de APIs (fetch/axios), config endpoints, etc.
    styles/                 # CSS propio (global, variables, utilidades)
    App.jsx                 # Componente raíz
    main.jsx                # Entry point: render + imports globales (Bootstrap)
    index.css               # CSS global (opcional)
  index.html                # HTML base (contiene <div id="root"></div>)
  package.json
  vite.config.js
  README.md
