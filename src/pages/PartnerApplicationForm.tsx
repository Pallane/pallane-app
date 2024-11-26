import React, { useState } from 'react';
import { ArrowRight, Building2, Mail, Phone, Globe, Users, Briefcase, MessageSquare } from 'lucide-react';

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

export default function PartnerApplicationForm() {
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
            className="w-full bg-white/10 text-white px-4 py-3 pl-12 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-lg appearance-none"
          >
            <option value="">Sélectionnez une option</option>
            {step.options.map((option: string) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/60">
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
            className="w-full bg-white/10 text-white px-4 py-3 pl-12 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-lg resize-none placeholder-white/60"
          />
          <div className="absolute top-4 left-4 text-white/60">
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
                type="text"
                value={formData[field as keyof typeof formData] as string}
                onChange={(e) => handleInputChange(field, e.target.value)}
                placeholder={step.placeholders[index]}
                className="w-full bg-white/10 text-white px-4 py-3 pl-12 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-lg placeholder-white/60"
              />
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/60">
                {step.icon}
              </div>
            </div>
          ))}
        </div>
      );
    }

    return (
      <div className="relative">
        <input
          type="text"
          value={formData[step.field as keyof typeof formData] as string}
          onChange={(e) => handleInputChange(step.field, e.target.value)}
          placeholder={step.placeholder}
          className="w-full bg-white/10 text-white px-4 py-3 pl-12 rounded-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent text-lg placeholder-white/60"
        />
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-white/60">
          {step.icon}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-2xl mx-auto px-8 py-16">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-sm">Temps estimé: 5-7 minutes</span>
            <span className="text-white text-sm">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full">
            <div 
              className="h-full bg-secondary rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Form content */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-8">
            {steps[currentStep].title || 'Étape ' + (currentStep + 1)}
          </h2>
          {renderInput(steps[currentStep])}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-white">
            Étape {currentStep + 1} sur {steps.length}
          </div>
          <button
            onClick={handleNext}
            className="w-full sm:w-auto bg-secondary text-primary px-6 py-3 rounded-xl hover:bg-secondary/90 transition-colors inline-flex items-center justify-center gap-2"
          >
            {currentStep === steps.length - 1 ? 'Envoyer' : 'Continuer'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}