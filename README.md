# Skycast

A polished, responsive weather dashboard built from the Skycast Figma concept.

## Workflow

Figma design → Next.js/React implementation → GitHub → Vercel deployment.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Lucide React
- Open-Meteo Geocoding + Forecast APIs

## Features

- City/location search
- Browser geolocation
- Current temperature and condition
- Feels-like temperature
- Wind, pressure, visibility, humidity
- 7-day forecast
- Sunrise and sunset
- Responsive dark glassmorphism UI
- Loading and error states

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## API

The app uses Open-Meteo server-side through `/api/weather`. No API key or environment variable is required.

## Deployment

The repository is intended for deployment on Vercel. Import the GitHub repository and use the default Next.js build settings.