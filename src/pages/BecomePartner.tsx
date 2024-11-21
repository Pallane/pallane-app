import React, { useState } from 'react';
import { ArrowRight, Building2, Users, BadgeCheck, Rocket, Mail, Phone, Globe, MessageSquare, Briefcase } from 'lucide-react';
import Footer from '../components/Footer';

interface FormData {
  companyName: string;
  website: string;
  employeeCount: string;
  industry: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  message: string;
}

export default function BecomePartner() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    website: '',
    employeeCount: '',
    industry: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    message: ''
  });

  const steps = [
    {
      title: "Informations de l'entreprise",
      fields: ['companyName', 'website'],
      placeholders: ['Nom de votre entreprise', 'Site web'],
      icon: <Building2 className="w-5 h-5" />
    },
    {
      title: "Taille et secteur",
      field: 'employeeCount',
      type: 'select',
      options: ['1-10', '11-50', '51-200', '201-500', '500+'],
      icon: <Users className="w-5 h-5" />
    },
    {
      field: 'industry',
      type: 'select',
      options: ['Technologies', 'Finance', 'Santé', 'Education', 'Autre'],
      icon: <Briefcase className="w-5 h-5" />
    },
    {
      title: "Contact",
      fields: ['contactName', 'contactEmail', 'contactPhone'],
      placeholders: ['Nom complet', 'Email professionnel', 'Téléphone'],
      icon: <Mail className="w-5 h-5" />
    },
    {
      title: "Message",
      field: 'message',
      type: 'textarea',
      placeholder: 'Décrivez votre projet et vos objectifs...',
      icon: <MessageSquare className="w-5 h-5" />
    }
  ];

  const handleInputChange = (field: string, value: string) => {
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

  const renderInput = (step: any) => {
    if (step.type === 'select') {
      return (
        <div className="relative">
          <select
            value={formData[step.field as keyof typeof formData] as string}
            onChange={(e) => handleInputChange(step.field, e.target.value)}
            className="w-full bg-[#EDEDED] px-4 py-3 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#87BBBA] focus:border-transparent text-[#0B3251]"
          >
            <option value="">Sélectionnez une option</option>
            {step.options.map((option: string) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
            {step.icon}
          </div>
        </div>
      );
    }

    if (step.type === 'textarea') {
      return (
        <div className="relative">
          <textarea
            value={formData[step.field as keyof typeof formData] as string}
            onChange={(e) => handleInputChange(step.field, e.target.value)}
            placeholder={step.placeholder}
            rows={4}
            className="w-full bg-[#EDEDED] px-4 py-3 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#87BBBA] focus:border-transparent text-[#0B3251] resize-none"
          />
          <div className="absolute top-4 left-4 text-gray-400">
            {step.icon}
          </div>
        </div>
      );
    }

    if (step.fields) {
      return (
        <div className="space-y-4">
          {step.fields.map((field: string, index: number) => (
            <div key={field} className="relative">
              <input
                type={field.includes('email') ? 'email' : field.includes('phone') ? 'tel' : 'text'}
                value={formData[field as keyof typeof formData] as string}
                onChange={(e) => handleInputChange(field, e.target.value)}
                placeholder={step.placeholders[index]}
                className="w-full bg-[#EDEDED] px-4 py-3 pl-12 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#87BBBA] focus:border-transparent text-[#0B3251]"
              />
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-gray-400">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Devenez partenaire et développez votre business
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Rejoignez notre écosystème de partenaires et accédez à de nouvelles opportunités de croissance pour votre entreprise.
            </p>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="py-16">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600 text-sm">Temps estimé: 5-7 minutes</span>
                  <span className="text-gray-600 text-sm">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="h-2 bg-[#EDEDED] rounded-full">
                  <div 
                    className="h-full bg-[#87BBBA] rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Form content */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-[#0B3251] mb-8">
                  {steps[currentStep].title || 'Étape ' + (currentStep + 1)}
                </h2>
                {renderInput(steps[currentStep])}
              </div>

              {/* Navigation */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-gray-600">
                  Étape {currentStep + 1} sur {steps.length}
                </div>
                <button
                  onClick={handleNext}
                  className="w-full sm:w-auto bg-[#0B3251] text-white px-6 py-3 rounded-xl hover:bg-[#0B3251]/90 transition-colors inline-flex items-center justify-center gap-2"
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
            Les avantages du programme partenaire
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#87BBBA]/10 p-8 rounded-xl group hover:bg-[#87BBBA]/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-[#87BBBA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3251] mb-4">Visibilité accrue</h3>
              <p className="text-gray-600">
                Profitez d'une exposition privilégiée auprès de notre clientèle B2B qualifiée.
              </p>
            </div>

            <div className="bg-[#87BBBA]/10 p-8 rounded-xl group hover:bg-[#87BBBA]/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-[#87BBBA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3251] mb-4">Support dédié</h3>
              <p className="text-gray-600">
                Bénéficiez d'un accompagnement personnalisé et d'une équipe dédiée à votre réussite.
              </p>
            </div>

            <div className="bg-[#87BBBA]/10 p-8 rounded-xl group hover:bg-[#87BBBA]/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <BadgeCheck className="w-8 h-8 text-[#87BBBA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3251] mb-4">Certification</h3>
              <p className="text-gray-600">
                Valorisez votre expertise avec notre programme de certification partenaire.
              </p>
            </div>

            <div className="bg-[#87BBBA]/10 p-8 rounded-xl group hover:bg-[#87BBBA]/20 transition-colors">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6">
                <Rocket className="w-8 h-8 text-[#87BBBA]" />
              </div>
              <h3 className="text-xl font-semibold text-[#0B3251] mb-4">Croissance</h3>
              <p className="text-gray-600">
                Accélérez votre développement grâce à nos ressources et notre réseau.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}