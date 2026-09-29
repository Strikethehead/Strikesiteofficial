import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// Photo Slider Component
export const PhotoSlider = ({ photos, currentSlide, setCurrentSlide, onPrev, onNext }) => (
  <div className="relative mb-12 max-w-4xl mx-auto" data-testid="live-slider">
    <div className="aspect-video overflow-hidden border border-white/10">
      <img 
        src={photos[currentSlide]} 
        alt={`Live photo ${currentSlide + 1}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
    </div>
    
    {/* Navigation Arrows */}
    <button 
      onClick={onPrev}
      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black transition-colors duration-300"
      data-testid="slider-prev"
    >
      <ChevronLeft size={24} />
    </button>
    <button 
      onClick={onNext}
      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/50 hover:bg-[#D4AF37] text-white hover:text-black transition-colors duration-300"
      data-testid="slider-next"
    >
      <ChevronRight size={24} />
    </button>

    {/* Dots */}
    <div className="flex justify-center gap-2 mt-4">
      {photos.map((photo, index) => (
        <button
          key={photo}
          onClick={() => setCurrentSlide(index)}
          className={`w-2 h-2 rounded-full transition-colors duration-300 ${
            index === currentSlide ? 'bg-[#D4AF37]' : 'bg-zinc-600'
          }`}
          data-testid={`slider-dot-${index}`}
        />
      ))}
    </div>
  </div>
);

// Event Item Component (for events with clickable image)
export const EventItemWithImage = ({ perf, year, index, onClick }) => (
  <button
    key={`${year}-${perf.event}-${perf.location}-${index}`}
    onClick={onClick}
    className="w-full flex flex-col md:flex-row md:items-center gap-1 md:gap-4 pl-4 border-l border-[#D4AF37]/30 py-2 text-left hover:bg-[#D4AF37]/10 transition-colors duration-300 cursor-pointer"
    data-testid="csf-event-button"
  >
    <span className="font-heading text-lg uppercase flex-1 text-[#D4AF37]">{perf.event}</span>
    <span className="text-zinc-400 text-sm tracking-widest uppercase flex items-center gap-2">
      {perf.location}
      <ExternalLink size={14} className="text-[#D4AF37]" />
    </span>
  </button>
);

// Event Item Component (regular)
export const EventItem = ({ perf, year, index }) => (
  <div 
    key={`${year}-${perf.event}-${perf.location}-${index}`} 
    className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 pl-4 border-l border-[#D4AF37]/30 py-2"
  >
    {perf.date && (
      <span className="text-[#D4AF37] text-sm font-bold min-w-[100px] md:min-w-[120px]">{perf.date}</span>
    )}
    <span className="font-heading text-lg uppercase flex-1">{perf.event}</span>
    <span className="text-zinc-500 text-sm tracking-widest uppercase">{perf.location}</span>
  </div>
);

// Year Accordion Component
export const YearAccordion = ({ year, events, isExpanded, onToggle, onEventClick }) => (
  <div className="border border-white/5 hover:border-[#D4AF37]/30 transition-colors duration-300">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 text-left"
      data-testid={`live-year-${year}`}
    >
      <span className="text-[#D4AF37] font-bold text-xl">{year}</span>
      <span className="text-zinc-500 text-sm">{events.length} {events.length === 1 ? 'evento' : 'eventi'}</span>
    </button>
    {isExpanded && (
      <div className="px-4 pb-4 space-y-2">
        {events.map((perf, index) => (
          perf.hasImage ? (
            <EventItemWithImage 
              key={`${year}-${perf.event}-${index}`}
              perf={perf} 
              year={year} 
              index={index} 
              onClick={onEventClick} 
            />
          ) : (
            <EventItem 
              key={`${year}-${perf.event}-${index}`}
              perf={perf} 
              year={year} 
              index={index} 
            />
          )
        ))}
      </div>
    )}
  </div>
);

// CSF Calendar Modal Component
export const CsfCalendarModal = ({ isOpen, onClose, imageUrl }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90"
      onClick={onClose}
      data-testid="csf-modal"
    >
      <div className="relative max-w-4xl max-h-[90vh] overflow-auto mt-20 md:mt-0">
        <button
          onClick={onClose}
          className="fixed top-24 md:top-8 right-8 w-12 h-12 flex items-center justify-center bg-[#D4AF37] text-black hover:bg-white transition-colors duration-300 z-[201] text-xl font-bold"
          data-testid="csf-modal-close"
        >
          ✕
        </button>
        <img 
          src={imageUrl} 
          alt="CSF Carmagnola - Calendario DJ Set" 
          className="w-full h-auto"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
};
