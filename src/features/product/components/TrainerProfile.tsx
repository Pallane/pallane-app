import React from 'react';
import { Award, Languages, Briefcase, CheckCircle } from 'lucide-react';

interface TrainerProfileProps {
  trainer: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
    certifications: string[];
    specialties: string[];
    languages: string[];
  };
}

export default function TrainerProfile({ trainer }: TrainerProfileProps) {
  return (
    <div className="bg-white rounded-xl p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Votre formateur</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Photo et infos principales */}
        <div className="flex-shrink-0">
          <div className="relative">
            <img 
              src={trainer.avatar} 
              alt={trainer.name}
              className="w-32 h-32 rounded-xl object-cover"
            />
            <div className="absolute -bottom-3 -right-3 bg-primary text-white px-3 py-1 rounded-full text-sm">
              Expert
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-900">{trainer.name}</h3>
            <p className="text-gray-600">{trainer.title}</p>
          </div>

          <p className="text-gray-700 mb-6">{trainer.bio}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Award className="w-5 h-5 text-primary" />
                <h4 className="font-medium text-gray-900">Certifications</h4>
              </div>
              <ul className="space-y-2">
                {trainer.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Spécialités */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <h4 className="font-medium text-gray-900">Spécialités</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {trainer.specialties.map((specialty, index) => (
                  <span 
                    key={index}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Langues */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <Languages className="w-5 h-5 text-primary" />
                <h4 className="font-medium text-gray-900">Langues</h4>
              </div>
              <div className="flex gap-4">
                {trainer.languages.map((language, index) => (
                  <span key={index} className="text-gray-600">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}