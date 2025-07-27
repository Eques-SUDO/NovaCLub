import React, { useState, useCallback, useMemo } from 'react';
import { FaFilter, FaMusic } from 'react-icons/fa';
import EventCard from '../components/EventCard';

interface Event {
  id: number;
  title: string;
  artist: string;
  date: Date;
  time: string;
  price: number;
  category: string;
  description: string;
  location: string;
  soldOut: boolean;
}

interface Category {
  value: string;
  label: string;
}

const Events: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const events: Event[] = useMemo(() => [
    {
      id: 1,
      title: "Weekly Jam Session",
      artist: "All Members Welcome",
      date: new Date('2025-01-01'),
      time: "TBA",
      price: 0,
      category: "jam",
      description: "Bring your instrument and join our collaborative music session. All skill levels welcome!",
      location: "TBA",
      soldOut: false
    },
    {
      id: 2,
      title: "Music Theory Classes",
      artist: "NOVA Music Club Instructors",
      date: new Date('2025-01-01'),
      time: "TBA",
      price: 0,
      category: "workshop",
      description: "Learn chord progressions, songwriting, and music composition fundamentals.",
      location: "TBA",
      soldOut: false
    },
    {
      id: 3,
      title: "Guitar Classes",
      artist: "NOVA Music Club Instructors",
      date: new Date('2025-01-01'),
      time: "TBA",
      price: 0,
      category: "workshop",
      description: "Guitar techniques, effects, and performance tips for all levels.",
      location: "TBA",
      soldOut: false
    },
    {
      id: 4,
      title: "Choir Practice",
      artist: "NOVA Music Club Choir",
      date: new Date('2025-01-01'),
      time: "TBA",
      price: 0,
      category: "rehearsal",
      description: "Join our vocal ensemble for harmonious choir practice sessions.",
      location: "TBA",
      soldOut: false
    }
  ], []);

  const categories: Category[] = [
    { value: 'all', label: 'All Activities' },
    { value: 'jam', label: 'Jam Sessions' },
    { value: 'workshop', label: 'Classes' },
    { value: 'rehearsal', label: 'Choir Practice' }
  ];


  const filteredEvents = useMemo(() => {
    return filter === 'all' 
      ? events 
      : events.filter(event => event.category === filter);
  }, [filter, events]);

  const handleFilterChange = useCallback((newFilter: string) => {
    setFilter(newFilter);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg py-8 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-mesh-gradient" />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Enhanced Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 glass rounded-full border border-primary/20">
            <FaMusic className="text-nova-neon" />
            <span className="text-nova-neon font-medium">NOVA Music Club</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-display text-gradient mb-6 leading-tight">
            Club Activities
          </h1>
          <p className="text-xl md:text-2xl text-gray-text max-w-4xl mx-auto leading-relaxed">
            Join our weekly sessions, workshops, and campus performances
          </p>
          
          {/* Subtle decorative line */}
          <div className="w-24 h-1 bg-nova-gradient rounded-full mx-auto mt-8" />
        </div>

        {/* Enhanced Filter Bar */}
        <div className="glass border border-primary/20 rounded-2xl p-6 mb-16 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 text-nova-neon mb-4 md:mb-0">
              <FaFilter className="text-lg" />
              <span className="font-semibold text-lg">Filter Activities:</span>
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => handleFilterChange(cat.value)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    filter === cat.value
                      ? 'bg-nova-gradient text-accent shadow-glow border-2 border-nova-neon/50'
                      : 'glass border border-primary/30 text-accent hover:border-nova-neon hover:shadow-lg hover:bg-primary/10'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 relative">
            <div className="glass border border-primary/20 rounded-3xl p-12 max-w-2xl mx-auto backdrop-blur-xl">
              <div className="w-20 h-20 bg-nova-gradient rounded-full flex items-center justify-center mx-auto mb-8">
                <FaMusic className="text-3xl text-accent" />
              </div>
              
              <h3 className="text-3xl font-bold text-accent mb-6">
                No activities found
              </h3>
              <p className="text-xl text-gray-text leading-relaxed mb-8">
                Check back soon for new sessions and workshops!<br />
                Or try selecting a different category above.
              </p>
              
              <div className="w-16 h-1 bg-nova-gradient rounded-full mx-auto" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;