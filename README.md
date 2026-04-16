# Financial API - Backend Test

## Descripción

API REST desarrollada en Node.js que consume datos financieros desde una API externa (Finnhub), permite consultar una acción determinada por 'symbol' y responde su precio actual, el porcentaje del cambio y la tendencia (sube, baja o se mantiene).

---

## Tecnologías usadas

* Node.js
* Express.js
* TypeORM
* SQLite
* Axios

---

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/julianagomez21/backend-test.git
cd backend-test
```

2. Instalar dependencias:

```bash
npm install
```

3. Crear archivo `.env`:

```env
FINNHUB_API_KEY=tu_api_key
```

4. Ejecutar el proyecto:

```bash
npm run dev
```

Servidor disponible en:

```bash
http://localhost:3000
```

---

## Endpoint principal

### Obtener resumen financiero por símbolo

```bash
GET /api/financial-data?symbol=AAPL
```

### Respuesta:

```json
{
  "price": 466.09,
  "change": 1.46,
  "changePercent": 0.31,
  "trend": "up"
}
```

### Notas:

Se pueden consultar diferentes acciones utilizando el parámetro symbol:

GET /api/external-data?symbol=TSLA
GET /api/external-data?symbol=GOOGL
GET /api/external-data?symbol=MSFT
GET /api/external-data?symbol=AMZN
GET /api/external-data?symbol=NVDA

Algunos símbolos comunes:
AAPL → Apple
TSLA → Tesla
GOOGL → Google
MSFT → Microsoft
AMZN → Amazon
NVDA → NVIDIA

Nota: Los símbolos corresponden a acciones listadas en mercados financieros internacionales y dependen de la disponibilidad en la API de Finnhub.

---

## API externa utilizada

Finnhub API
https://finnhub.io/

---

## Base de datos

Se utiliza SQLite con TypeORM para persistir los datos financieros consultados.

El archivo de base de datos se genera automáticamente:

```bash
db.sqlite
```

---
