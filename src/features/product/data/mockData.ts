export const mockProducts = {
  hardware: {
    // ... existing hardware data ...
  },
  license: {
    // ... existing license data ...
  },
  training: {
    azure: {
      id: 'azure',
      type: 'training',
      name: 'Formation Microsoft Azure',
      description: 'Maîtrisez le cloud computing',
      price: '499€',
      logo: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-azure-marketplace/azure-logo.svg',
      objectives: [
        'Comprendre les concepts fondamentaux du cloud computing',
        'Maîtriser les services Azure essentiels',
        'Déployer et gérer des applications dans le cloud',
        'Implémenter la sécurité et la conformité'
      ],
      prerequisites: [
        'Connaissances de base en administration système',
        'Familiarité avec les concepts de virtualisation',
        'Compréhension basique des réseaux'
      ],
      syllabus: [
        'Introduction au Cloud Computing et Azure',
        'Services de calcul et de conteneurisation',
        'Stockage et bases de données',
        'Réseaux et sécurité',
        'Surveillance et optimisation'
      ],
      duration: '5 jours',
      language: 'Français',
      certificate: true
    },
    powerplatform: {
      id: 'powerplatform',
      type: 'training',
      name: 'Power Platform',
      description: 'Créez des applications sans code',
      price: '299€',
      logo: 'https://powerplatform.microsoft.com/content/dam/microsoft/final/en-us/microsoft-power-platform/power-platform-logo.svg',
      objectives: [
        'Créer des applications avec Power Apps',
        'Automatiser des processus avec Power Automate',
        'Analyser des données avec Power BI',
        'Développer des chatbots avec Power Virtual Agents'
      ],
      prerequisites: [
        'Connaissance de Microsoft 365',
        'Aucune expérience en programmation requise',
        'Familiarité avec Excel'
      ],
      syllabus: [
        'Introduction à Power Platform',
        'Création d\'applications avec Power Apps',
        'Automatisation avec Power Automate',
        'Analyse de données avec Power BI',
        'Chatbots avec Power Virtual Agents'
      ],
      duration: '3 jours',
      language: 'Français',
      certificate: true
    },
    security: {
      id: 'security',
      type: 'training',
      name: 'Cybersécurité',
      description: 'Protégez votre entreprise',
      price: '699€',
      logo: 'https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-365/m365-logo.svg',
      objectives: [
        'Comprendre les menaces de sécurité actuelles',
        'Mettre en place une stratégie de sécurité',
        'Gérer les incidents de sécurité',
        'Implémenter les bonnes pratiques'
      ],
      prerequisites: [
        'Connaissances en administration système',
        'Bases en réseaux informatiques',
        'Expérience en IT'
      ],
      syllabus: [
        'Fondamentaux de la cybersécurité',
        'Sécurité des réseaux',
        'Sécurité des applications',
        'Gestion des incidents',
        'Conformité et audit'
      ],
      duration: '4 jours',
      language: 'Français',
      certificate: true
    },
    ai: {
      id: 'ai',
      type: 'training',
      name: 'Intelligence Artificielle',
      description: 'Exploitez le potentiel de l\'IA',
      price: '899€',
      logo: 'https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-teams/teams-logo.svg',
      objectives: [
        'Comprendre les concepts de l\'IA',
        'Implémenter des solutions de ML',
        'Développer des modèles d\'IA',
        'Déployer des solutions en production'
      ],
      prerequisites: [
        'Connaissances en programmation Python',
        'Bases en mathématiques et statistiques',
        'Expérience en développement'
      ],
      syllabus: [
        'Introduction à l\'IA et au ML',
        'Deep Learning et réseaux de neurones',
        'NLP et traitement du langage',
        'Computer Vision',
        'MLOps et déploiement'
      ],
      duration: '5 jours',
      language: 'Français',
      certificate: true
    }
  },
  expert: {
    // ... existing expert data ...
  }
};