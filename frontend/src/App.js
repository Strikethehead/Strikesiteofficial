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
  { year: "2015", event: "Documentario RAI 'I GIGANTI'", location: "Italia" },
  { year: "2014", event: "UNTI E BISUNTI 2 - D-MAX", location: "Italia" },
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
          <a href="#collaborazioni" className="text-sm tracking-widest uppercase text-zinc-400 hover:text-white transition-colors duration-300" data-testid="nav-collaborazioni">
            Collab
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
const AlbumCard = ({ type, year, title, artist, index, coverImage }) => {
  return (
    <div 
      className="album-card animate-fadeInUp" 
      style={{ animationDelay: `${index * 0.1}s` }}
      data-testid={`album-card-${index}`}
    >
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
            <AlbumCard type="Album" year="2023" title="Diamanti Grezzi" artist="Coolkitz & Strike The Head" index={0} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/8lhm3038_diamanti%20grezzi%20cover.jpg" />
            <AlbumCard type="Album" year="2011" title="One Day Making" artist="Coolkitz & Strike The Head" index={1} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/a3509u61_onedaymaking.jpg" />
            <AlbumCard type="Album" year="2007" title="Prima di dormire" artist="Strike The Head" index={2} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/vklrfe08_StrikeTheHeadPrimadidormire.jpg" />
          </div>
        </div>

        {/* EPs */}
        <div>
          <h3 className="text-sm tracking-[0.2em] uppercase text-[#D4AF37] mb-6">EP</h3>
          <div className="discography-grid" data-testid="eps-grid">
            <AlbumCard type="EP" year="2014" title="Amare non basta mai" artist="Strike The Head" index={0} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/ghvrm7f1_amare%20nonbasta.jpg" />
            <AlbumCard type="EP" year="2010" title="Disturbi del sonno" artist="Strike The Head" index={1} coverImage="https://customer-assets.emergentagent.com/job_beat-maker-75/artifacts/7ss110iw_distrurbi.jpg" />
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

// Collaborations data as simple array
const collaborationsData = [
  { year: "2025", items: ["Mr Phormula \"Cymraeg Worldwide\" (Galles)", "JK \"Astra Aeterna\" (Italy)", "Hanzo Reiza \"Hikki Dojo Freestyle '14\""] },
  { year: "2024", items: ["JK \"Supernovae\" (Italy)", "Mastafive \"Euforia Collabo\" (Italy)", "Mastafive & Fabio Musta \"La prima volta\" con Oyoshe & Kenzie (Italy)"] },
  { year: "2023", items: ["Simmy Summer \"Chaos\" (Italy)", "Zell Dj \"Serious\" (Italy)"] },
  { year: "2022", items: ["Stritti \"Strittmatazz\" (Italy)"] },
  { year: "2021", items: ["Aa.vv. Summer Vibes vol.2 – B.M. records", "Stritti \"Fantasy\" (Italy)"] },
  { year: "2020", items: ["Strike The Head x Lilym – Il cielo in una stanza (Rmx)", "Aa.vv. Summer Vibes vol.1 – B.M. records", "Al Fo \"I Believe\" (Italy)", "#Unitidalgroove – \"Re senza Trono\"", "Viola Ent. \"Torino non è piu' Fiat\" (Italy)", "Stritti \"RiRappresento\" (Italy)"] },
  { year: "2017", items: ["Josef K \"No Matter\" (Romania)", "Rand Slam \"Rimajinasi\" (Indonesia)", "Keep it Real \"Fallo Realmente vol.1\" (Italy)"] },
  { year: "2016", items: ["eMCeeM \"International Hip Hop\" (Poland)", "Mr Phormula \"LLWYBRAU\" (Wales)", "Pat \"RapDiecicento\" (Italy)", "Lil bac \"L'invisibile\" (Italy)", "Sparadust \"Boom Balcanic Bap\" (Italy)", "Stritti \"HipHopCorn\" (Italy)"] },
  { year: "2015", items: ["San E \"The Boy Who Cried Wolf\" (South Korea)", "Hip Hop for The World \"#HipHopisHipHop\""] },
  { year: "2014", items: ["Aa.vv. \"The Movement Mixtape vol.1\"", "Dj Seby \"Blackzone Mixtape vol.6\"", "Radio Rade & Dj Spark \"Il Progetto Brunovic\"", "Manifesto \"Seriamente\" (12\")"] },
  { year: "2013", items: ["Jap & Paggio \"HipHopcrisia\" – B.M. records", "Bustaphort \"Collection: 2006-2012\" (Spain)", "Dj Jad \"Cool Tape\" – Mixtape", "G-Soul \"Tridream State\" (Spain)", "DragWan \"Lost Traxxx\" (Vinile)", "Rikom Carnera \"Il suono della campana\""] },
  { year: "2012", items: ["Rico \"HERTZMUSIC\"", "Erma \"KUMI\"", "Aa.vv. \"4MYPEOPLE vol.1\" (WeGotFlava)"] },
  { year: "2011", items: ["Kabin \"CHECKPOINT\" (Hungary)", "7Peccati \"DYNAMIKE 2007\"", "DragWan \"Colpiscimi ep\"", "Aa.vv. \"Save HipHop compilation\"", "Elfa \"Missantropa\"", "Kitz \"Music Paiura\"", "Erma \"Regnum Sardiniae\"", "El Cebero de la SL \"Fina Estampa\" (Colombia)", "Bolo Creatore \"Golem 2\""] },
  { year: "2010", items: ["Ruido & Fame126 \"Zero Cloni Mixtape vol.1\"", "El Cebero de la SL \"Tiempo pa Matar\" (Colombia)"] },
  { year: "2009", items: ["Aa.vv. \"TrainingDay vol.1\" (Groove Magazine)", "Maury B \"One Day\"", "Mecom \"La classe delle elementari\"", "BabyTraxx \"Babytraxx is James Digger\" (France)", "SupaBeatz prod. \"2 Calci in bocca\""] },
  { year: "2008", items: ["Don Stefano \"Diamanti Mixtape\""] },
  { year: "2007", items: ["Aa.vv. \"Xmas Compilation vol.2\"", "Don Stefanuccio \"Dolce Veleno Mixtapes\""] },
  { year: "2006", items: ["Bolo Creatore \"Golem\"", "KjNoone \"Brotha Fight\"", "21 Grammi \"Orgoglio nazionale\"", "Erma \"Ermatico\"", "Mas.T \"Rap Games\"", "Dhiram Records \"Street Tape vol.1\"", "Dj Frankie O \"Insoliti Inediti\""] },
  { year: "2005", items: ["Lingo \"S.T.A.W.A.\" (Poland)", "Cisa \"Suonoibrido vol.2\"", "Kalafro Sound Power \"Bergamotto Showcase\"", "Aa.vv. \"Music & Movie compilation\" (SkyTv)", "Mastafive \"Dammi un beat\""] },
  { year: "2004", items: ["Aa.vv. \"Sampler03\" (DaBombMagazine)", "Cisa \"Suonoibrido vol.1\"", "Aa.vv \"Hip Hop United\" (Nederland)", "Adry \"Va Cosi'\" (Spain)", "Quality Bastard \"Basement 2000_2004\"", "Canebullo \"Solista ma non troppo\"", "Izanami \"Con le unghie\""] },
  { year: "2003", items: ["Dj Mesta \"Invasione Mixtape vol.1\"", "Hiphop&Stop \"Underground\"", "Dabee & Black King \"Nucleo Compatto vol.2\"", "Misterkumasca' \"Impronte\""] },
  { year: "2002", items: ["Erma \"Ermageddon\"", "Quality Bastard \"Cap Tost Mixtape\"", "Mikron \"HipHop Next Stop\"", "Soprasotto prod. \"SoprasottoClick\"", "Dabee \"Nucleo Compatto\""] },
  { year: "2001", items: ["Supervirzi Corporation \"Zona Stretta\""] }
];

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
          {collaborationsData.map((yearData) => (
            <div key={yearData.year} className="border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-300">
              <button
                onClick={() => setExpandedYear(expandedYear === yearData.year ? null : yearData.year)}
                className="w-full flex items-center justify-between p-4 text-left"
                data-testid={`collab-year-${yearData.year}`}
              >
                <span className="text-[#D4AF37] font-bold text-xl">{yearData.year}</span>
                <span className="text-zinc-500 text-sm">{yearData.items.length} collaborazioni</span>
              </button>
              {expandedYear === yearData.year && (
                <div className="px-4 pb-4 space-y-2">
                  {yearData.items.map((collab, index) => (
                    <p key={index} className="text-zinc-400 text-sm pl-4 border-l border-[#D4AF37]/30">
                      {collab}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
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
      <CollaborationsSection />
      <Footer />
    </div>
  );
}

export default App;
