import { useEffect, useState } from "react";
import "@/App.css";
import { Instagram, Youtube, Music2, Facebook, ChevronDown, Play, ExternalLink } from "lucide-react";

// Artist Data
const artistName = "STRIKE THE HEAD";
const artistTagline = "SULLA SCENA DAL 1998";
const videoId = "4cwdmZ2DHP0";

const socialInstagram = "https://www.instagram.com/strikethehead/";
const socialYoutube = "https://www.youtube.com/@striketheheadofficial";
const socialSpotify = "https://open.spotify.com/intl-it/artist/73z0OCKr558bQfMGcA2kIv?si=iKTIsQLTS6yw1cekv_obHw";
const socialFacebook = "https://www.facebook.com/striketheheadofficial";

const heroImage = "https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/frvvfz33_strike%20the%20head%20spotify.jpg";

const livePerformances = [
  { year: "2025", event: "BBC S4C - Live con MR PHORMULA", location: "Galles, UK" },
  { year: "2023", event: "Diamanti Grezzi Tour", location: "Italia" },
  { year: "2015", event: "Documentario RAI 'I GIGANTI'", location: "Italia" },
  { year: "2014", event: "UNTI E BISUNTI 2 - D-MAX", location: "Italia" },
  { year: "2005", event: "Music & Movie - SKY TV", location: "Italia" }
];

const biographyText = `Sulla scena dal 1998, membro di Zulu Nation Italia e della Gatekeepaz crew. Artista indipendente di B.M.records, OneDayLabel e KOF97.

Viene notato nel 2002 su ERMAGEDDON di Erma stampato da Vitaminic, nel 2003 DJ MESTA lo inserisce in INVASIONE MIXTAPE vol.1 con il suo gruppo di allora le "Menti Folli" insieme a Kyosho, nel 2004 fa parte della compilation "HIP HOP UNITED a european Hip-Hop compilation", distribuito da FAT BEATS nei Paesi Bassi.

Nello stesso anno esce in edicola con il singolo "SOGNI" prodotto da Mastafive inserito nel "Sampler03" allegato a DABOMB MAGAZINE, e nel 2005 su "Dammi un beat" di Mastafive distribuito in edicola. Lo stesso anno è ospite del programma "Music & Movie" su Italia Teen Television di SKY TV con Tiso e Daniela Ferolla (Miss Italia 2001) e selezionato per l'omonima compilation distribuita nei negozi.

Nel 2006 partecipa a "Dhiram records mixtape" di El Invikto, unico italiano partecipante oltre a Fabri Fibra. Nel 2007 esce il suo primo album "Prima di dormire", mentre le collaborazioni internazionali continuano tra Italia, Polonia, Ungheria e Colombia.

Nel 2009 il produttore Francese James Digger lo contatta per partecipare al suo album "Babytraxx is James Digger", Strike tira in ballo tutta la crew, "C'est le crew" vede sulla produzione francese gran parte dei Gate Keepaz.

Nel 2011 realizza insieme a Coolkitz un album scritto e registrato in 24 ore "OneDayMaking" e nel 2012 entra nella compilation "4MYPEOPLE vol.1" in allegato a WEGOTFLAVA, Magazine di cui è anche redattore.

Nel 2013 DJ Jad (Articolo 31) inserisce una sua traccia nel suo "Cool Tape" e nel 2014 realizzano insieme il singolo "UPPERGROUND". Lo stesso anno compare nel programma televisivo "UNTI E BISUNTI 2" su D-MAX.

Nel 2015 compare nel documentario RAI "I GIGANTI" e finisce su Billboard USA con il progetto #HIPHOPISHIPHOP brano internazionale realizzato per l'UNICEF dal koreano San-E a cui prende parte anche la leggenda KRS-One.

Le collaborazioni internazionali proseguono con Mr Phormula nell'album "LLWYBRAU" in Galles, e con Emcee M in Polonia con "Internationall Hip-Hop" a cui prende parte anche Donald D e molti altri artisti da varie parti del Mondo.

Nel 2017 l'indonesiano Rand Slam lo chiama a partecipare nel suo disco "RIMAJINASI" premiato come miglior album Hip-Hop di quell'anno su Rolling Stone Indonesia.

Nel 2023 torna a fare dischi insieme a Coolkitz con "Diamanti Grezzi" un disco dalle sonorità Golden Age, che è stato passato in Radio FM anche in Francia, Inghilterra e Galles.

Nel 2025 Strike collabora nuovamente con MR PHORMULA e performa live insieme a lui sul canale S4C del famoso network televisivo della BBC.`;

// Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} data-testid="navbar">
      <div className="container flex items-center justify-between">
        <a href="#home" className="font-heading text-2xl tracking-wider" data-testid="navbar-logo">
          STRIKE
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#video" className="text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300" data-testid="nav-video">
            Video
          </a>
          <a href="#bio" className="text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300" data-testid="nav-bio">
            Bio
          </a>
          <a href="#discografia" className="text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300" data-testid="nav-discografia">
            Discografia
          </a>
          <a href="#live" className="text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300" data-testid="nav-live">
            Live
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={socialInstagram} target="_blank" rel="noopener noreferrer" className="social-link w-10 h-10" data-testid="nav-instagram">
            <Instagram size={18} />
          </a>
          <a href={socialSpotify} target="_blank" rel="noopener noreferrer" className="social-link w-10 h-10" data-testid="nav-spotify">
            <Music2 size={18} />
          </a>
        </div>
      </div>
    </nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="home" className="hero-section" data-testid="hero-section">
      <div 
        className="hero-bg"
        style={{ backgroundImage: `url('${heroImage}')` }}
      />
      <div className="hero-overlay" />
      
      <div className="hero-content">
        <p className="text-sm md:text-base tracking-[0.3em] uppercase text-zinc-400 mb-4 animate-fadeInUp opacity-0" style={{ animationDelay: "0.2s" }}>
          Zulu Nation Italia • Gatekeepaz Crew
        </p>
        <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight uppercase mb-6 animate-fadeInUp opacity-0" style={{ animationDelay: "0.4s" }} data-testid="hero-title">
          {artistName}
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 mb-8 animate-fadeInUp opacity-0" style={{ animationDelay: "0.6s" }}>
          {artistTagline}
        </p>
        <a 
          href="#video" 
          className="btn-primary animate-fadeInUp opacity-0" 
          style={{ animationDelay: "0.8s" }}
          data-testid="hero-cta"
        >
          <Play size={18} />
          Guarda l'ultimo video
        </a>
      </div>

      <div className="scroll-indicator" data-testid="scroll-indicator">
        <span className="text-xs tracking-widest uppercase">Scorri</span>
        <ChevronDown size={20} />
      </div>
    </section>
  );
};

// Video Section
const VideoSection = () => {
  return (
    <section id="video" className="section" style={{ background: "#050505" }} data-testid="video-section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Ultimo Video</h2>
        <div className="video-container animate-fadeInUp" style={{ animationDelay: "0.2s" }} data-testid="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="Strike The Head - Ultimo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-8 text-center">
          <a 
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300"
            data-testid="youtube-link"
          >
            Guarda su YouTube
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};

// Biography Section
const BioSection = () => {
  const [expanded, setExpanded] = useState(false);
  const paragraphs = biographyText.split('\n\n');
  const shortBio = paragraphs.slice(0, 3);
  const displayBio = expanded ? paragraphs : shortBio;

  return (
    <section id="bio" className="section" style={{ background: "#0A0A0A" }} data-testid="bio-section">
      <div className="container">
        <div className="bio-section">
          <div className="bio-image animate-slideInLeft" data-testid="bio-image">
            <img 
              src="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/tv18cl41_photo_2026-01-08_21-58-15.jpg" 
              alt="Strike The Head"
            />
          </div>
          <div className="animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
            <p className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-4">Biografia</p>
            <h2 className="section-title mb-8" style={{ marginBottom: "2rem" }}>La Storia</h2>
            <div className="text-zinc-400 leading-relaxed space-y-4" data-testid="bio-text">
              {displayBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <button 
              onClick={() => setExpanded(!expanded)}
              className="mt-6 text-sm tracking-widest uppercase text-[#D4AF37] hover:text-[#FCD34D] transition-colors duration-300"
              data-testid="bio-expand-btn"
            >
              {expanded ? "Mostra meno" : "Leggi tutto"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Album Card Component
const AlbumCard = ({ type, year, title, artist, index }) => {
  return (
    <div 
      className="album-card animate-fadeInUp" 
      style={{ animationDelay: `${index * 0.1}s` }}
      data-testid={`album-card-${index}`}
    >
      <p className="album-type">{type}</p>
      <p className="album-year">{year}</p>
      <h4 className="album-title">{title}</h4>
      <p className="album-artist">{artist}</p>
    </div>
  );
};

// Discography Section
const DiscographySection = () => {
  return (
    <section id="discografia" className="section" style={{ background: "#050505" }} data-testid="discography-section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Discografia</h2>
        
        {/* Albums */}
        <div className="mb-12">
          <h3 className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-6">Album</h3>
          <div className="discography-grid" data-testid="albums-grid">
            <AlbumCard type="Album" year="2023" title="Diamanti Grezzi" artist="Coolkitz & Strike The Head" index={0} />
            <AlbumCard type="Album" year="2011" title="One Day Making" artist="Coolkitz & Strike The Head" index={1} />
            <AlbumCard type="Album" year="2007" title="Prima di dormire" artist="Strike The Head" index={2} />
          </div>
        </div>

        {/* EPs */}
        <div>
          <h3 className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-6">EP</h3>
          <div className="discography-grid" data-testid="eps-grid">
            <AlbumCard type="EP" year="2014" title="Amare non basta mai" artist="Strike The Head" index={0} />
            <AlbumCard type="EP" year="2010" title="Disturbi del sonno" artist="Strike The Head" index={1} />
          </div>
        </div>
      </div>
    </section>
  );
};

// Live Section
const LiveSection = () => {
  return (
    <section id="live" className="section" style={{ background: "#0A0A0A" }} data-testid="live-section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Live</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl">
          Apparizioni televisive, performance dal vivo e collaborazioni internazionali
        </p>
        
        <div className="space-y-4" data-testid="live-list">
          {livePerformances.map((perf, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 p-4 border border-white/5 hover:border-[#D4AF37]/50 transition-colors duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`live-item-${index}`}
            >
              <span className="text-[#D4AF37] font-bold text-lg md:w-20">{perf.year}</span>
              <span className="font-heading text-xl md:text-2xl uppercase flex-1">{perf.event}</span>
              <span className="text-zinc-500 text-sm tracking-widest uppercase">{perf.location}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-[#D4AF37]/30 bg-[#D4AF37]/5">
          <p className="text-sm tracking-widest uppercase text-[#D4AF37] mb-2">Booking & Collaborazioni</p>
          <p className="text-zinc-400">
            Per richieste di booking, interviste o collaborazioni, contattare attraverso i social media ufficiali.
          </p>
        </div>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer" data-testid="footer">
      <div className="container">
        <h2 className="font-heading text-4xl md:text-5xl uppercase mb-8">
          {artistName}
        </h2>
        
        <div className="flex justify-center gap-4 mb-8" data-testid="social-links">
          <a 
            href={socialInstagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            data-testid="footer-instagram"
            aria-label="Instagram"
          >
            <Instagram size={20} />
          </a>
          <a 
            href={socialYoutube} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            data-testid="footer-youtube"
            aria-label="YouTube"
          >
            <Youtube size={20} />
          </a>
          <a 
            href={socialSpotify} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            data-testid="footer-spotify"
            aria-label="Spotify"
          >
            <Music2 size={20} />
          </a>
          <a 
            href={socialFacebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
            data-testid="footer-facebook"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          © {currentYear} STRIKE THE HEAD. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

// Main App
function App() {
  return (
    <div className="App" data-testid="app-container">
      <div className="grain-overlay" />
      <Navbar />
      <HeroSection />
      <VideoSection />
      <BioSection />
      <DiscographySection />
      <LiveSection />
      <Footer />
    </div>
  );
}

export default App;
