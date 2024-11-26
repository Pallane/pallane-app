import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BookOpen, Target, Clock, User, Mail, FileText } from 'lucide-react';
import Logo from '../components/Logo';
import Footer from '../components/Footer';

interface FormData {
  title: string;
  description: string;
  objectives: string;
  prerequisites: string;
  syllabus: string;
  duration: string;
  language: string;
  price: string;
  trainerName: string;
  trainerBio: string;
  certifications: string;
  email: string;
  phone: string;
  documents: FileList | null;
}

export default function BecomePartner() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    objectives: '',
    prerequisites: '',
    syllabus: '',
    duration: '',
    language: '',
    price: '',
    trainerName: '',
    trainerBio: '',
    certifications: '',
    email: '',
    phone: '',
    documents: null
  });

  const steps = [
    {
      title: "Informations de la formation",
      fields: ['title', 'description'],
      placeholders: ['Titre de la formation', 'Description détaillée'],
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Objectifs et prérequis",
      fields: ['objectives', 'prerequisites'],
      placeholders: ['Objectifs de la formation', 'Prérequis nécessaires'],
      icon: <Target className="w-5 h-5" />
    },
    {
      title: "Programme",
      field: 'syllabus',
      type: 'textarea',
      placeholder: 'Détaillez le programme de la formation...',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: "Informations pratiques",
      fields: ['duration', 'language', 'price'],
      placeholders: ['Durée (ex: 3 jours)', 'Langue', 'Prix par personne'],
      icon: <Clock className="w-5 h-5" />
    },
    {
      title: "Profil formateur",
      fields: ['trainerName', 'trainerBio', 'certifications'],
      placeholders: ['Votre nom complet', 'Votre biographie', 'Vos certifications (séparées par des virgules)'],
      icon: <User className="w-5 h-5" />
    },
    {
      title: "Contact",
      fields: ['email', 'phone'],
      placeholders: ['Email professionnel', 'Téléphone'],
      icon: <Mail className="w-5 h-5" />
    },
    {
      title: "Documents",
      field: 'documents',
      type: 'file',
      placeholder: 'CV, certifications, supports de cours...',
      icon: <FileText className="w-5 h-5" />
    }
  ];

  const handleInputChange = (field: string, value: string | FileList | null) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Submit form
      console.log('Form submitted:', formData);
      // Show success message
      alert('Votre candidature a été envoyée avec succès !');
    }
  };

  const renderField = (field: string, type?: string) => {
    if (type === 'file') {
      return (
        <div className="relative">
          <label 
            htmlFor={field}
            className="block w-full px-4 py-3 rounded-xl border-2 border-dashed border-primary/50 hover:border-primary transition-colors cursor-pointer bg-primary/5 text-center"
          >
            <div className="flex flex-col items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              <span className="text-primary">Choisir des fichiers</span>
              <span className="text-sm text-gray-500">ou glisser-déposer ici</span>
            </div>
            <input
              type="file"
              id={field}
              multiple
              className="hidden"
              onChange={(e) => handleInputChange(field, e.target.files)}
            />
          </label>
        </div>
      );
    }

    if (type === 'textarea') {
      return (
        <textarea
          value={formData[field as keyof FormData] as string}
          onChange={(e) => handleInputChange(field, e.target.value)}
          placeholder={steps[currentStep].placeholder}
          rows={6}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
        />
      );
    }

    return (
      <input
        type="text"
        value={formData[field as keyof FormData] as string}
        onChange={(e) => handleInputChange(field, e.target.value)}
        placeholder={steps[currentStep].placeholders?.[steps[currentStep].fields?.indexOf(field)] || ''}
        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
      />
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Devenez formateur et partagez votre expertise
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Rejoignez notre réseau de formateurs experts et contribuez à former la prochaine génération de professionnels.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Temps estimé: 5-7 minutes</span>
                  <span className="text-gray-600 text-sm">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form content */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {steps[currentStep].title || 'Étape ' + (currentStep + 1)}
                </h2>
                <div className="space-y-4">
                  {Array.isArray(steps[currentStep].fields) ? (
                    steps[currentStep].fields.map((field) => (
                      <div key={field}>
                        {renderField(field, steps[currentStep].type)}
                      </div>
                    ))
                  ) : (
                    renderField(steps[currentStep].field, steps[currentStep].type)
                  )}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-gray-600">
                  Étape {currentStep + 1} sur {steps.length}
                </div>
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                >
                  {currentStep === steps.length - 1 ? 'Envoyer' : 'Continuer'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-white">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
          <h2 className="text-3xl font-bold text-[#0B3251] mb-12 text-center">
            Les avantages de devenir formateur
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#87BBBA]/10 p-8 rounded-xl group hover:bg-[#87BBBA]/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[#87BBBA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3251] mb-4">Flexibilité</h3>
              <p className="text-gray-600">
                Gérez votre emploi du temps et choisissez vos missions de formation.
              </p>
            </div>

            <div className="bg-[#87BBBA]/10 p-8 rounded-xl group hover:bg-[#87BBBA]/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-[#87BBBA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3251] mb-4">Rémunération attractive</h3>
              <p className="text-gray-600">
                Bénéficiez d'une rémunération compétitive pour votre expertise.
              </p>
            </div>

            <div className="bg-[#87BBBA]/10 p-8 rounded-xl group hover:bg-[#87BBBA]/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-[#87BBBA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3251] mb-4">Support pédagogique</h3>
              <p className="text-gray-600">
                Accédez à nos ressources et outils pédagogiques professionnels.
              </p>
            </div>

            <div className="bg-[#87BBBA]/10 p-8 rounded-xl group hover:bg-[#87BBBA]/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-[#87BBBA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3251] mb-4">Communauté</h3>
              <p className="text-gray-600">
                Rejoignez une communauté dynamique de formateurs experts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}