import React, { useState } from 'react';
import { Calendar, Users, MapPin, Video } from 'lucide-react';

// Simuler des sessions de formation
const sessions = [
  {
    id: 1,
    startDate: '2024-02-01',
    endDate: '2024-02-05',
    type: 'remote',
    availableSeats: 8,
    totalSeats: 10,
    price: '1499€',
    language: 'Français'
  },
  {
    id: 2,
    startDate: '2024-02-15',
    endDate: '2024-02-19',
    type: 'onsite',
    location: 'Paris',
    availableSeats: 5,
    totalSeats: 10,
    price: '1699€',
    language: 'Français'
  },
  {
    id: 3,
    startDate: '2024-03-01',
    endDate: '2024-03-05',
    type: 'remote',
    availableSeats: 10,
    totalSeats: 10,
    price: '1499€',
    language: 'Anglais'
  }
];

export default function TrainingSchedule() {
  const [selectedSession, setSelectedSession] = useState<number | null>(null);

  const handleReservation = (sessionId: number) => {
    setSelectedSession(sessionId);
    // Logique de réservation
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const generateCalendarLink = (session: any) => {
    const startDate = new Date(session.startDate);
    const endDate = new Date(session.endDate);
    
    // Format pour Google Calendar
    const googleStart = startDate.toISOString().replace(/-|:|\.\d\d\d/g, '');
    const googleEnd = endDate.toISOString().replace(/-|:|\.\d\d\d/g, '');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Formation Azure')}&dates=${googleStart}/${googleEnd}`;
  };

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div 
          key={session.id}
          className={`border rounded-xl p-6 ${
            selectedSession === session.id ? 'border-primary' : 'border-gray-200'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-4">
              {/* Dates et type */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">
                    Du {formatDate(session.startDate)} au {formatDate(session.endDate)}
                  </span>
                </div>
                {session.type === 'remote' ? (
                  <div className="flex items-center gap-2 text-blue-600">
                    <Video className="w-5 h-5" />
                    <span>À distance</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-green-600">
                    <MapPin className="w-5 h-5" />
                    <span>{session.location}</span>
                  </div>
                )}
              </div>

              {/* Places disponibles */}
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">
                  {session.availableSeats} places disponibles sur {session.totalSeats}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{session.price}</div>
                <div className="text-sm text-gray-500">par personne</div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => handleReservation(session.id)}
                  className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Réserver
                </button>
                <a
                  href={generateCalendarLink(session)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center text-primary text-sm hover:text-primary/80"
                >
                  Ajouter à mon agenda
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}