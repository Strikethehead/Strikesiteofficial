// Collaboration years
export const collabYears = [
  "2025", "2024", "2023", "2022", "2021", "2020", "2017", "2016", "2015", 
  "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", 
  "2005", "2004", "2003", "2002", "2001"
];

// Collaborations by year
export const collabItems = {
  "2026": "Quilo Sa Razza - Come Sun Tzu",
  "2025": "Mr Phormula - Cymraeg Worldwide (Galles)|JK - Astra Aeterna|Hanzo Reiza - Hikki Dojo Freestyle 14",
  "2024": "JK - Supernovae|Mastafive - Euforia Collabo|Mastafive & Fabio Musta - La prima volta|Zell Dj - Clockworks",
  "2023": "Simmy Summer - Chaos|Zell Dj - Serious",
  "2022": "Stritti - Strittmatazz",
  "2021": "Summer Vibes vol.2 B.M. records|Stritti - Fantasy",
  "2020": "Strike The Head x Lilym - Il cielo in una stanza Rmx|Summer Vibes vol.1|Al Fo - I Believe|Unitidalgroove - Re senza Trono|Viola Ent. - Torino non e piu Fiat|Stritti - RiRappresento",
  "2017": "Josef K - No Matter (Romania)|Rand Slam - Rimajinasi (Indonesia)|Keep it Real - Fallo Realmente vol.1",
  "2016": "eMCeeM - International Hip Hop (Poland)|Mr Phormula - LLWYBRAU (Wales)|Pat - RapDiecicento|Lil bac - L invisibile|Sparadust - Boom Balcanic Bap|Stritti - HipHopCorn",
  "2015": "San E - The Boy Who Cried Wolf (South Korea)|HipHopisHipHop",
  "2014": "The Movement Mixtape vol.1|Dj Seby - Blackzone Mixtape vol.6|Radio Rade & Dj Spark - Il Progetto Brunovic|Manifesto - Seriamente",
  "2013": "Jap & Paggio - HipHopcrisia|Bustaphort - Collection 2006-2012 (Spain)|Dj Jad - Cool Tape|G-Soul - Tridream State (Spain)|DragWan - Lost Traxxx|Rikom Carnera - Il suono della campana",
  "2012": "Rico - HERTZMUSIC|Erma - KUMI|4MYPEOPLE vol.1 WeGotFlava",
  "2011": "Kabin - CHECKPOINT (Hungary)|7Peccati - DYNAMIKE 2007|DragWan - Colpiscimi ep|Save HipHop compilation|Elfa - Missantropa|Kitz - Music Paiura|Erma - Regnum Sardiniae|El Cebero de la SL - Fina Estampa (Colombia)|Bolo Creatore - Golem 2",
  "2010": "Ruido & Fame126 - Zero Cloni Mixtape vol.1|El Cebero de la SL - Tiempo pa Matar (Colombia)",
  "2009": "TrainingDay vol.1 Groove Magazine|Maury B - One Day|Mecom - La classe delle elementari|BabyTraxx - Babytraxx is James Digger (France)|SupaBeatz prod. - 2 Calci in bocca",
  "2008": "Don Stefano - Diamanti Mixtape",
  "2007": "Xmas Compilation vol.2|Don Stefanuccio - Dolce Veleno Mixtapes",
  "2006": "Bolo Creatore - Golem|KjNoone - Brotha Fight|21 Grammi - Orgoglio nazionale|Erma - Ermatico|Mas.T - Rap Games|Dhiram Records - Street Tape vol.1|Dj Frankie O - Insoliti Inediti",
  "2005": "Lingo - S.T.A.W.A. (Poland)|Cisa - Suonoibrido vol.2|Kalafro Sound Power - Bergamotto Showcase|Music & Movie compilation SkyTv|Mastafive - Dammi un beat",
  "2004": "Sampler03 DaBombMagazine|Cisa - Suonoibrido vol.1|Hip Hop United (Nederland)|Adry - Va Cosi (Spain)|Quality Bastard - Basement 2000-2004|Canebullo - Solista ma non troppo|Izanami - Con le unghie",
  "2003": "Dj Mesta - Invasione Mixtape vol.1|Hiphop&Stop - Underground|Dabee & Black King - Nucleo Compatto vol.2|Misterkumasca - Impronte",
  "2002": "Erma - Ermageddon|Quality Bastard - Cap Tost Mixtape|Mikron - HipHop Next Stop|Soprasotto prod. - SoprasottoClick|Dabee - Nucleo Compatto",
  "2001": "Supervirzi Corporation - Zona Stretta"
};

export function getCollabItems(year) {
  return collabItems[year] ? collabItems[year].split("|") : [];
}
