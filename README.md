# Restcountries (Angular)

App de práctica en Angular que consume la API de **REST Countries** para listar países, navegar al detalle de un país y gestionar una sección de favoritos. Incluye búsqueda en el listado y UI con Bootstrap.

## Demo (local)

- **URL**: `http://localhost:4200`

## Funcionalidades

- **Listado de países**: vista `Countries` con países obtenidos desde la API.
- **Detalle de país**: ruta con parámetro `country/:countryName` (vista `Details`).
- **Favoritos**: ruta `favorites` (vista `Favorites`).
- **Búsqueda**: componente `Search` en el navbar; el texto se propaga con un servicio y se filtra con un pipe.
- **Routing + 404**: fallback a `PageNotFound`.
- **UI**: Bootstrap 5 + animación del botón hamburguesa del navbar.

## Rutas

Definidas en `src/app/app.routes.ts`:

- **`/countries`**: listado principal
- **`/favorites`**: favoritos
- **`/country/:countryName`**: detalle por nombre (full text)
- **`/**`**: página 404

## Stack / librerías

- **Angular**: 21.x (standalone components)
- **RxJS**: 7.8.x
- **Estilos**: Bootstrap 5 + Bootstrap Icons

## API

- **Base URL**: configurada en `src/environments/*` como `apiUrl`
- **Endpoints usados**:
  - **Listado**: `/all?fields=name,region`
  - **Detalle**: `/name/:countryName?fullText=true`

## Estructura relevante

- **`src/app/navbar/`**: navbar + `Search`
- **`src/app/search/`**: input de búsqueda y `SearchService`
- **`src/app/pages/countries/`**: página principal + `CountryService`
- **`src/app/pipes/search.pipe.ts`**: filtro por texto (usa `RegExp`)

## Requisitos

- **Node.js** y **npm**
- **Angular CLI** (recomendado)

## Instalación y ejecución

Instalar dependencias:

```bash
npm install
```

Servidor de desarrollo:

```bash
npm start
```

Build:

```bash
npm run build
```

Tests:

```bash
npm test
```

## Notas

- El listado se obtiene al iniciar la app (ver `CountryService`).
- La búsqueda filtra por nombre común (`country.name.common`) ignorando mayúsculas/minúsculas.
