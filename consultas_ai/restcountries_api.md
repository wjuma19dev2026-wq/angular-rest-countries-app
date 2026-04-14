# REST Countries API Documentation

**Base URL:** https://restcountries.com

**Current Version:** v3.1 (v4 in preview - not for production)

## API Endpoints

### 1. All Countries

`/v3.1/all?fields=name,flags,etc.`

- Retrieve information about all countries
- **Must specify fields** (max 10 fields) or get 400 Bad Request

### 2. By Name

`/v3.1/name/{nombre}`

- Search by country name (common or official)

### 3. Full Name Search

`/v3.1/name/{nombre}?fullText=true`

- Exact match search by country name

### 4. By Code

`/v3.1/alpha/{código}`

- Search by cca2, ccn3, cca3 or cioc country code
- Examples: /v3.1/alpha/co, /v3.1/alpha/col, /v3.1/alpha/170

### 5. List of Codes

`/v3.1/alpha?codes={códigos}`

- Search by multiple country codes at once
- Example: /v3.1/alpha?codes=170,no,est,pe

### 6. By Currency

`/v3.1/currency/{moneda}`

- Search by currency code or name
- Example: /v3.1/currency/cop

### 7. By Language

`/v3.1/lang/{idioma}`

- Search by language code or name
- Example: /v3.1/lang/spanish

### 8. By Capital City

`/v3.1/capital/{capital}`

- Search by capital city
- Example: /v3.1/capital/tallinn

### 9. By Region

`/v3.1/region/{región}`

- Filter countries by region
- Example: /v3.1/region/europe

### 10. By Subregion

`/v3.1/subregion/{subregión}`

- Filter countries by subregion
- Example: /v3.1/subregion/Northern Europe

### 11. By Demonym

`/v3.1/demonym/{demónimo}`

- Search by how a citizen is called
- Example: /v3.1/demonym/peruvian

### 12. By Translation

`/v3.1/translation/{traducción}`

- Search by any translation name
- Example: /v3.1/translation/alemania

### 13. Independent Countries

`/v3.1/independent?status=true/false`

- Get all independent (true) or non-independent (false) countries
- Combine with fields: ?status=true&fields=languages,capital

### 14. Filter Response Fields

`/v3.1/{endpoint}?fields={campo1},{campo2},{campo3}`

- Filter the output to include only specified fields
- Example: /v3.1/all?fields=name,capital,currencies

## Important Notes

1. **Field Requirement:** When using `/all` endpoint, you **must** specify fields (up to 10) otherwise you'll get a bad request response.

2. **Available Fields:** Check https://gitlab.com/restcountries/restcountries/-/blob/master/FIELDS.md for a complete description of each field.

3. **Response Format:** All responses are in JSON format.

4. **Usage Limits:** The service handles 4M+ daily requests and is free to use (open source).

5. **Documentation Sources:**
   - Main docs: https://gitlab.com/restcountries/restcountries/-/blob/master/README.md
   - Fields reference: https://gitlab.com/restcountries/restcountries/-/blob/master/FIELDS.md
   - GitLab repository: https://gitlab.com/restcountries/restcountries

## Quick Examples

- Get all countries with name and capital: `https://restcountries.com/v3.1/all?fields=name,capital`
- Get Peru by name: `https://restcountries.com/v3.1/name/peru`
- Get Colombia by code: `https://restcountries.com/v3.1/alpha/co`
- Get countries using Euro: `https://restcountries.com/v3.1/currency/eur`
- Get Spanish-speaking countries: `https://restcountries.com/v3.1/lang/spanish`
