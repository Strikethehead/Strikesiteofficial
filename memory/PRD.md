# Strike The Head - Sito Promozionale

## Problem Statement
Sito promozionale per artista Hip-Hop "Strike The Head" con video YouTube in homepage, biografia, discografia e link social. Dark theme style.

## User Personas
- **Fan dell'artista**: visitatori interessati alla musica e storia dell'artista
- **Professionisti dell'industria musicale**: label, promoter, organizzatori eventi
- **Potenziali collaboratori**: altri artisti Hip-Hop

## Core Requirements
- [x] Hero section con nome artista e background
- [x] Video YouTube embedded in homepage (10 video totali)
- [x] Sezione biografia completa con expand/collapse
- [x] Sezione discografia (Album + EP con link Spotify)
- [x] Sezione Live performances (80+ date raggruppate per anno con slider 10 immagini)
- [x] Sezione Interviste/Press
- [x] Sezione Collaborazioni/Feat (raggruppate per anno)
- [x] Link social nel footer (Instagram, YouTube, Spotify, Facebook)
- [x] Design dark/scuro con tema dorato (#D4AF37)
- [x] Navigazione smooth scroll
- [x] Logo artista custom nella navbar
- [x] Logo Zulu Nation Italia nella navbar

## Architecture
- **Frontend**: React + Tailwind CSS
- **Backend**: FastAPI (minimal, non utilizzato per questo progetto statico)
- **Design**: Single page landing, dark theme, font Anton + Space Grotesk

## Implemented Features (Dicembre 2025)
1. Hero section full-screen con immagine di sfondo e CTA
2. Navbar fixed con glassmorphism on scroll + logo artista + logo Zulu Nation
3. Sezione Video con 10 YouTube embed (video principale + 9 "Altri Video")
4. Sezione Bio con testo espandibile (16 paragrafi)
5. Sezione Discografia:
   - 3 Album: Diamanti Grezzi (2023), One Day Making (2011), Prima di dormire (2007)
   - 2 EP: Amare non basta mai (2014), Disturbi del sonno (2010)
   - Tutti con link diretti a Spotify
6. Sezione Live con 80+ performance raggruppate per anno (1999-2026)
7. Slider foto live con 10 immagini e auto-avanzamento
8. Sezione Interviste con 7 link a press articles
9. Sezione Collaborazioni con lista completa per anno
10. Footer con social links
11. Animazioni di ingresso e hover effects
12. Mobile responsive design

## Code Quality Fixes Applied (Dicembre 2025)
- [x] Fix useEffect dependencies in LiveSection (nextSlide wrapped in useCallback)
- [x] Fix use-toast.js removing state from dependencies
- [x] Replaced all key={index} with stable unique keys
- [x] Extracted magic number 4000 to SLIDE_INTERVAL_MS constant
- [x] Extracted CardContent as separate AlbumCardContent component
- [x] Fixed unescaped apostrophe in Hero CTA

## Prioritized Backlog

### P0 (Completato)
- [x] Tutte le funzionalità core implementate
- [x] Correzioni code quality applicate

### P1 (Futuri miglioramenti)
- [ ] Form contatti per booking
- [ ] Sezione merchandise con link esterni
- [ ] SEO meta tags optimization

### P2 (Nice to have)
- [ ] Newsletter signup
- [ ] Integrazione Spotify embed player per preview brani
- [ ] Dark/Light mode toggle

## Next Tasks
1. Esportazione su GitHub per deploy gratuito su Vercel/Netlify
2. Aggiungere meta tags SEO per social sharing
