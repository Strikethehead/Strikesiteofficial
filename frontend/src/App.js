import { useEffect, useState } from "react";
import "@/App.css";
import { Instagram, Youtube, Music2, Facebook, ChevronDown, Play, ExternalLink } from "lucide-react";
import { collabYears, getCollabItems } from './collaborationsData';

// Artist Data
const artistName = "STRIKE THE HEAD";
const artistTagline = "HIP-HOP HEAD DAL 1998";
const videoId = "4cwdmZ2DHP0";

const socialInstagram = "https://www.instagram.com/strikethehead/";
const socialYoutube = "https://www.youtube.com/@striketheheadofficial";
const socialSpotify = "https://open.spotify.com/intl-it/artist/73z0OCKr558bQfMGcA2kIv?si=iKTIsQLTS6yw1cekv_obHw";
const socialFacebook = "https://www.facebook.com/striketheheadofficial";

const heroImage = "https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/frvvfz33_strike%20the%20head%20spotify.jpg";

const livePerformances = [
  { year: "2025", event: "BBC S4C - Live con MR PHORMULA", location: "Galles, UK" },
  { year: "2023", event: "WE GOT FLAVA - Hot Block Radio", location: "Italia" },
  { year: "2021", event: "Radio Bianconera - Canale 60 (speciale Videogames)", location: "Italia" },
  { year: "2020", event: "We Got Flava - ForMusic Tv", location: "Italia" },
  { year: "2020", event: "GIOVG Videogames Generation - ForMusicTv", location: "Italia" },
  { year: "2017", event: "Happy Hour - Vida Network", location: "Italia" },
  { year: "2016", event: "Videogames Generation - Vida Network", location: "Italia" },
  { year: "2015", event: "Torinight - Torinow (speciale Videogames)", location: "Italia" },
  { year: "2015", event: "Documentario RAI 'I GIGANTI'", location: "Italia" },
  { year: "2014", event: "Videogames Generation - ForMusic Tv", location: "Italia" },
  { year: "2014", event: "Torinight - Torinow (speciale Videogames)", location: "Italia" },
  { year: "2014", event: "UNTI E BISUNTI 2 - D-MAX", location: "Italia" },
  { year: "2013", event: "In Da Clip - ForMusic Tv", location: "Italia" },
  { year: "2007", event: "15' Hip-Hop - Radio City Vercelli", location: "Italia" },
  { year: "2006", event: "RAPP.IT - RVS Net (Radio Video Scicli FM)", location: "Italia" },
  { year: "2005", event: "Music & Movie - SKY TV", location: "Italia" }
];

const biographyText = `Sulla scena dal 1998, membro di Zulu Nation Italia, e della Gatekeepaz crew. Artista indipendente di B.M.records, OneDayLabel, e KOF97.

Viene notato nel 2002 su ERMAGEDDON di Erma stampato da Vitaminic, nel 2003 DJ MESTA lo inserisce in INVASIONE MIXTAPE vol.1 con il suo gruppo di allora le "Menti Folli" insieme a Kyosho, nel 2004 fa parte della compilation "HIP HOP UNITED a european Hip-Hop compilation", distribuito da FAT BEATS nei Paesi Bassi, nello stesso anno esce in edicola con il singolo "SOGNI" prodotto da Mastafive inserito nel "Sampler03" allegato a DABOMB MAGAZINE, e nel 2005 su "Dammi un beat" di Mastafive distribuito in edicola, lo stesso anno è ospite del programma "Music & Movie" su Italia Teen Television di SKY TV con Tiso e Daniela Ferolla (Miss Italia 2001) e selezionato per l'omonima compilation distribuita nei negozi.

Nel 2006 partecipa a "Dhiram records mixtape" di El Invikto, unico italiano partecipante oltre a Fabri Fibra. Nel 2007 esce il suo primo album "Prima di dormire", mentre le collaborazioni internazionali continuano tra Italia, Polonia, Ungheria e Colombia.

Nel 2009 il produttore Francese James Digger lo contatta per partecipare al suo album "Babytraxx is James Digger", Strike tira in ballo tutta la crew, "C'est le crew" vede sulla produzione francese gran parte dei Gate Keepaz.

Nel 2010 viene interamente prodotto dallo spagnolo Bustaphort realizzando l'EP "Disturbi del sonno".

Nel 2011 realizza insieme a Coolkitz un album scritto e registrato in 24 ore "OneDayMaking" e nel 2012 entra nella compilation "4MYPEOPLE vol.1" in allegato a WEGOTFLAVA, Magazine di cui è anche redattore.

Nel 2013 dopo l'uscita dell'EP "Amare non basta mai", DJ Jad (Articolo 31) realizza per Strike gli scratch di "Inmortal" inserita nel disco "Tridream state" omaggio a Nujabes prodotto dal team spagnolo G.SOUL (Bustaphort & Arlan).

Nel 2014 la collaborazione con "il Sarto" continua nel singolo "UPPERGROUND" prodotto proprio da DJ JAD. Lo stesso anno compare nel programma televisivo "UNTI E BISUNTI 2" su D-MAX. Sempre nel 2014 forma insieme a Dragwan il duo "Manifesto" che li porterà ad un'unica pubblicazione, un doppio singolo in Vinile prodotto da Lefty (Leftside) per B.M.records dal titolo "Seriamente/Il tuo obiettivo è il sole".

Nel 2015 compare nel documentario RAI "I GIGANTI" e finisce su Billboard USA con il progetto #HIPHOPISHIPHOP brano internazionale realizzato per l'UNICEF dal koreano San-E a cui prende parte anche la leggenda KRS-One.

Le collaborazioni internazionali proseguono con Mr Phormula nell'album "LLWYBRAU" in Galles, e con Emcee M in Polonia con "Internationall Hip-Hop" a cui prende parte anche Donald D e molti altri artisti da varie parti del Mondo.

Nel 2016 pubblica il doppio singolo "Incisa sulla pietra/Equilibri" 2 brani prodotti da Ice One.

Nel 2017 l'indonesiano Rand Slam lo chiama a partecipare nel suo disco "RIMAJINASI" premiato come miglior album Hip-Hop di quell'anno su Rolling Stone Indonesia.

Nel 2023 a distanza di 10 anni dall'ultima pubblicazione torna a fare dischi insieme a Coolkitz con "Diamanti Grezzi" un disco dalle sonorità Golden Age, accolto molto positivamente dalla critica, nonostante si discosti dal trend musicale del momento, ottiene passaggi importanti in Radio FM in Francia, Inghilterra e Galles, oltre ad alcune piccole realtà in Italia.

Nel 2025 Strike collabora nuovamente con MR PHORMULA nel brano "Cymru i'r Eidal (Dal Galles all'Italia)" e performa live insieme a lui sul canale S4C del famoso network televisivo della BBC.

Nel 2026 vedrà la luce il nuovo album realizzato insieme a Coolkitz.`;

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
        <a href="#home" className="navbar-logo" data-testid="navbar-logo">
          <img src="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/y9a6m9b9_strike%20logo%20trasparente%20bianco.png" alt="Strike The Head" className="h-20 md:h-24" />
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
          <a href="#interviste" className="text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300" data-testid="nav-interviste">
            Press
          </a>
          <a href="#collaborazioni" className="text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300" data-testid="nav-collaborazioni">
            Feat
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href={socialInstagram} target="_blank" rel="noopener noreferrer" className="social-link w-10 h-10" data-testid="nav-instagram">
            <Instagram size={18} />
          </a>
          <a href={socialYoutube} target="_blank" rel="noopener noreferrer" className="social-link w-10 h-10" data-testid="nav-youtube">
            <Youtube size={18} />
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
const allVideos = [
  { id: "4cwdmZ2DHP0", title: "Video Principale" },
  { id: "8NTZ1YgvJkA", title: "Video 2" },
  { id: "GiVM_d82_CQ", title: "Video 3" },
  { id: "k5VU2Q7AOck", title: "Video 4" },
  { id: "Jd8M_jyVVG0", title: "Video 5" },
  { id: "neZvbC2yqnY", title: "Video 6" },
  { id: "hjd9x8Yv2kg", title: "Video 7" }
];

const VideoSection = () => {
  return (
    <section id="video" className="section" style={{ background: "#050505" }} data-testid="video-section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Video</h2>
        
        {/* Video principale */}
        <div className="video-container animate-fadeInUp mb-12" style={{ animationDelay: "0.2s" }} data-testid="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title="Strike The Head - Ultimo Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Altri video */}
        <h3 className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-6">Altri Video</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="video-grid">
          {allVideos.slice(1).map((video, index) => (
            <div 
              key={video.id}
              className="video-thumb animate-fadeInUp"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              data-testid={`video-thumb-${index}`}
            >
              <div className="aspect-video border border-white/10 hover:border-[#D4AF37]/50 transition-colors duration-300 overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a 
            href={socialYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-zinc-400 hover:text-[#D4AF37] transition-colors duration-300"
            data-testid="youtube-link"
          >
            Vedi tutti i video su YouTube
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
const AlbumCard = ({ type, year, title, artist, index, coverImage, spotifyUrl }) => {
  const CardContent = () => (
    <>
      {coverImage && (
        <div className="album-cover mb-4">
          <img 
            src={coverImage} 
            alt={title} 
            className="w-full aspect-square object-cover"
          />
        </div>
      )}
      <p className="album-type">{type}</p>
      <p className="album-year">{year}</p>
      <h4 className="album-title">{title}</h4>
      <p className="album-artist">{artist}</p>
      {spotifyUrl && (
        <div className="mt-3 flex items-center gap-2 text-[#1DB954] text-sm">
          <Music2 size={14} />
          <span className="tracking-wider uppercase">Ascolta su Spotify</span>
        </div>
      )}
    </>
  );

  if (spotifyUrl) {
    return (
      <a 
        href={spotifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="album-card animate-fadeInUp block" 
        style={{ animationDelay: `${index * 0.1}s` }}
        data-testid={`album-card-${index}`}
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div 
      className="album-card animate-fadeInUp" 
      style={{ animationDelay: `${index * 0.1}s` }}
      data-testid={`album-card-${index}`}
    >
      <CardContent />
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
            <AlbumCard type="Album" year="2023" title="Diamanti Grezzi" artist="Coolkitz & Strike The Head" index={0} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/8lhm3038_diamanti%20grezzi%20cover.jpg" spotifyUrl="https://open.spotify.com/intl-it/album/6jGFW5k7IkdKY4aIBQ6YnK" />
            <AlbumCard type="Album" year="2011" title="One Day Making" artist="Coolkitz & Strike The Head" index={1} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/a3509u61_onedaymaking.jpg" spotifyUrl="https://open.spotify.com/intl-it/album/6FBR1p0kFiLRrm1VI0hBx9" />
            <AlbumCard type="Album" year="2007" title="Prima di dormire" artist="Strike The Head" index={2} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/vklrfe08_StrikeTheHeadPrimadidormire.jpg" spotifyUrl="https://open.spotify.com/intl-it/album/0C2gD9a5g9ESgsfDcW28Rr" />
          </div>
        </div>

        {/* EPs */}
        <div>
          <h3 className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-6">EP</h3>
          <div className="discography-grid" data-testid="eps-grid">
            <AlbumCard type="EP" year="2014" title="Amare non basta mai" artist="Strike The Head" index={0} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/ghvrm7f1_amare%20nonbasta.jpg" spotifyUrl="https://open.spotify.com/intl-it/album/2vNiXGvhljni10oCwzT4le" />
            <AlbumCard type="EP" year="2010" title="Disturbi del sonno" artist="Strike The Head" index={1} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/7ss110iw_distrurbi.jpg" spotifyUrl="https://open.spotify.com/intl-it/album/0jOVJRfNwsM13YQaj7L9mQ" />
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

// Interviews Section
const InterviewsSection = () => {
  const interviews = [
    {
      year: "2026",
      title: "Intervista Analogica",
      description: "Strike the Head: \"Più poeti, meno influencer. Il rap è una missione di vita.\"",
      url: "https://www.nootempo.net/intervista-analogica-strike-the-head-piu-poeti-meno-influencer-il-rap-e-una-missione-di-vita/",
      source: "Nootempo"
    },
    {
      year: "2024",
      title: "Podcast / Intervista",
      description: "Strike The Head - The Block is Hot",
      url: "https://www.hotblockradio.it/podcastfilter/intervista-strike/?cn-reloaded=1",
      source: "Hot Block Radio"
    },
    {
      year: "2023",
      title: "Exxtra Special Interview",
      description: "Strike The Head racconta il suo album \"Diamanti Grezzi\"",
      url: "https://www.nootempo.net/exxtra-special-interview-strike-the-head-racconta-il-suo-album-diamanti-grezzi-a-cura-di-valentina-sertini/",
      source: "Nootempo"
    }
  ];

  return (
    <section id="interviste" className="section" style={{ background: "#0A0A0A" }} data-testid="interviews-section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Interviste</h2>
        
        <div className="space-y-6" data-testid="interviews-list">
          {interviews.map((interview, index) => (
            <a
              key={index}
              href={interview.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-white/5 hover:border-[#D4AF37]/50 bg-[#050505] transition-all duration-300 hover:translate-x-2 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`interview-${index}`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <span className="text-[#D4AF37] font-bold text-2xl md:w-20">{interview.year}</span>
                <div className="flex-1">
                  <p className="text-xs tracking-widest uppercase text-zinc-500 mb-1">{interview.source}</p>
                  <h3 className="font-heading text-xl md:text-2xl uppercase mb-2">{interview.title}</h3>
                  <p className="text-zinc-400">{interview.description}</p>
                </div>
                <ExternalLink size={20} className="text-zinc-500 hidden md:block" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const CollaborationsSection = () => {
  const [expandedYear, setExpandedYear] = useState(null);

  return (
    <section id="collaborazioni" className="section" style={{ background: "#050505" }} data-testid="collaborations-section">
      <div className="container">
        <h2 className="section-title animate-fadeInUp">Collaborazioni</h2>
        <p className="text-zinc-400 mb-8 max-w-2xl">
          Oltre 20 anni di collaborazioni internazionali con artisti da Italia, Galles, Polonia, Spagna, Francia, Indonesia, Colombia, Ungheria, Romania e Corea del Sud.
        </p>
        
        <div className="space-y-2" data-testid="collaborations-list">
          {collabYears.map((year) => {
            const items = getCollabItems(year);
            return (
              <div key={year} className="border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-300">
                <button
                  onClick={() => setExpandedYear(expandedYear === year ? null : year)}
                  className="w-full flex items-center justify-between p-4 text-left"
                  data-testid={`collab-year-${year}`}
                >
                  <span className="text-[#D4AF37] font-bold text-xl">{year}</span>
                  <span className="text-zinc-500 text-sm">{items.length} collaborazioni</span>
                </button>
                {expandedYear === year && (
                  <div className="px-4 pb-4 space-y-2">
                    {items.map((collab, index) => (
                      <p key={index} className="text-zinc-400 text-sm pl-4 border-l border-[#D4AF37]/30">
                        {collab}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
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
      <InterviewsSection />
      <CollaborationsSection />
      <Footer />
    </div>
  );
}

export default App;
