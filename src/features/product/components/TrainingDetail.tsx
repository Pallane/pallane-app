{/* Je garde le même contenu mais je réorganise les sections dans l'ordre demandé */}
import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Download, Heart, ChevronRight, Users, BookOpen, Target, CheckCircle, School, Clock, Globe, Award, Calendar, Mail } from 'lucide-react';
import ProductCard from '../../../components/shared/ProductCard';
import { mockProducts } from '../data/mockData';
import TrainingSchedule from './TrainingSchedule';
import TrainerProfile from './TrainerProfile';

export default function TrainingDetail({ product }: { product: any }) {
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleDownloadPDF = () => {
    // Logique de génération PDF
  };

  const handleAddToFavorites = () => {
    // Logique d'ajout aux favoris
  };

  // Simuler des formations recommandées
  const recommendedTrainings = Object.values(mockProducts.training).slice(0, 3);

  // Données du formateur
  const trainer = {
    name: "Jean Dupont",
    title: "Expert Cloud & DevOps",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop",
    bio: "Plus de 15 ans d'expérience dans le cloud computing et DevOps. Certifié Azure Solutions Architect Expert et AWS Solutions Architect Professional.",
    certifications: ["Azure Solutions Architect Expert", "AWS Solutions Architect Professional", "Google Cloud Professional Architect"],
    specialties: ["Cloud Architecture", "DevOps", "Containerization", "Microservices"],
    languages: ["Français", "Anglais"]
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-primary text-white rounded-xl overflow-hidden">
        <div className="p-8">
          <div className="flex items-center justify-between mb-6">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-300 hover:text-white">Accueil</Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link to="/catalog" className="text-gray-300 hover:text-white">Formations</Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-white">{product.name}</span>
            </nav>
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleShare}
                className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10"
                title="Partager"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button 
                onClick={handleDownloadPDF}
                className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10"
                title="Télécharger PDF"
              >
                <Download className="w-5 h-5" />
              </button>
              <button 
                onClick={handleAddToFavorites}
                className="p-2 text-white/80 hover:text-white rounded-full hover:bg-white/10"
                title="Ajouter aux favoris"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="max-w-3xl">
            <div className="inline-block bg-secondary/20 px-4 py-2 rounded-lg mb-4">
              <span className="text-sm text-secondary font-medium">
                Référence: TRN-{product.id.toUpperCase()}
              </span>
            </div>
            
            <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
            <p className="text-xl text-gray-300 mb-8">{product.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Durée</p>
                  <p className="font-medium">{product.duration}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Langue</p>
                  <p className="font-medium">{product.language}</p>
                </div>
              </div>

              {product.certificate && (
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Certification</p>
                    <p className="font-medium">Incluse</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Objectifs de la formation */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Target className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Objectifs de la formation</h2>
        </div>
        <ul className="space-y-3">
          {product.objectives?.map((objective: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{objective}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Prérequis */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Prérequis</h2>
        </div>
        <ul className="space-y-3">
          {product.prerequisites?.map((prerequisite: string, index: number) => (
            <li key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{prerequisite}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Programme détaillé */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold text-gray-900">Programme détaillé</h2>
        </div>
        <div className="space-y-4">
          {product.syllabus?.map((module: string, index: number) => (
            <details key={index} className="group">
              <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-medium">
                    {index + 1}
                  </span>
                  <span className="font-medium text-gray-900">{module}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90" />
              </summary>
              <div className="p-4">
                <p className="text-gray-600">Contenu détaillé du module {index + 1}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Profil du formateur */}
      <TrainerProfile trainer={trainer} />

      {/* Sessions de formation */}
      <div className="bg-white rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">Sessions à venir</h2>
          </div>
          <button 
            onClick={() => window.open('https://calendar.google.com/calendar/render?action=TEMPLATE&text=Formation%20Azure&dates=20240201T090000Z%2F20240205T170000Z', '_blank')}
            className="flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <Mail className="w-4 h-4" />
            <span>Ajouter à mon agenda</span>
          </button>
        </div>
        <TrainingSchedule />
      </div>

      {/* Formations recommandées */}
      <div className="bg-white rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Pour poursuivre votre parcours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendedTrainings.map((training: any) => (
            <ProductCard
              key={training.id}
              id={training.id}
              logo={training.logo}
              tag={training.type}
              title={training.name}
              description={training.description}
              price={training.price}
              badge="Recommandé"
            />
          ))}
        </div>
      </div>
    </div>
  );
}