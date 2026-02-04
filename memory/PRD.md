# Strike The Head - Sito Promozionale

## Problem Statement
Sito promozionale per artista Hip-Hop "Strike The Head" con video YouTube in homepage, biografia, discografia e link social.

## User Personas
- **Fan dell'artista**: visitatori interessati alla musica e storia dell'artista
- **Professionisti dell'industria musicale**: label, promoter, organizzatori eventi
- **Potenziali collaboratori**: altri artisti Hip-Hop

## Core Requirements
- [x] Hero section con nome artista e background
- [x] Video YouTube embedded in homepage
- [x] Sezione biografia completa con expand/collapse
- [x] Sezione discografia (Album + EP)
- [x] Link social nel footer (Instagram, YouTube, Spotify, Facebook)
- [x] Design dark/scuro ispirato a nasirjones.com
- [x] Navigazione smooth scroll

## Architecture
- **Frontend**: React + Tailwind CSS
- **Backend**: FastAPI (minimal, non utilizzato per questo progetto)
- **Design**: Single page landing, dark theme, font Anton + Space Grotesk

## Implemented Features (Feb 2025)
1. Hero section full-screen con immagine di sfondo e CTA
2. Navbar fixed con glassmorphism on scroll
3. Sezione Video con YouTube embed (video ID: 4cwdmZ2DHP0)
4. Sezione Bio con testo espandibile
5. Sezione Discografia:
   - 3 Album: Diamanti Grezzi (2023), One Day Making (2011), Prima di dormire (2007)
   - 2 EP: Amare non basta mai (2014), Disturbi del sonno (2010)
6. Footer con social links
7. Animazioni di ingresso e hover effects
8. Mobile responsive design

## Prioritized Backlog

### P0 (Completato)
- [x] Tutte le funzionalità core implementate

### P1 (Futuri miglioramenti)
- [ ] Aggiungere foto reali dell'artista
- [ ] Sezione date/concerti
- [ ] Integrazione con Spotify embed player
- [ ] Sezione press/media kit

### P2 (Nice to have)
- [ ] Form contatti per booking
- [ ] Newsletter signup
- [ ] Galleria foto/video
- [ ] Sezione merchandise

## Next Tasks
1. Sostituire le immagini placeholder con foto reali dell'artista
2. Aggiungere una sezione "Prossimi Eventi/Concerti"
3. Integrare Spotify player per ascoltare i brani direttamente
