export const mockProducts = {
  hardware: {
    surface: {
      id: 'surface',
      type: 'hardware',
      name: 'Surface Pro 9',
      description: 'La tablette professionnelle la plus polyvalente',
      specs: {
        processor: 'Intel Core i7 12th Gen',
        memory: '16GB LPDDR5',
        storage: '512GB SSD',
        display: '13" PixelSense Flow Display',
        battery: 'Jusqu\'à 15.5 heures'
      },
      warranty: {
        duration: '2 ans',
        type: 'Garantie limitée matérielle',
        support: 'Support technique premium inclus'
      },
      price: '1199€',
      logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OAgf'
    },
    thinkpad: {
      id: 'thinkpad',
      type: 'hardware',
      name: 'ThinkPad X1 Carbon',
      description: 'L\'ordinateur portable professionnel par excellence',
      specs: {
        processor: 'Intel Core i7 13th Gen',
        memory: '32GB LPDDR5',
        storage: '1TB SSD',
        display: '14" 4K OLED',
        battery: 'Jusqu\'à 18 heures'
      },
      price: '1499€',
      logo: 'https://www.lenovo.com/content/dam/lenovo-logo.svg'
    },
    macbookpro: {
      id: 'macbookpro',
      type: 'hardware',
      name: 'MacBook Pro M3',
      description: 'Performance et autonomie exceptionnelles',
      specs: {
        processor: 'Apple M3 Pro',
        memory: '32GB Unified Memory',
        storage: '1TB SSD',
        display: '14" Liquid Retina XDR',
        battery: 'Jusqu\'à 22 heures'
      },
      price: '2299€',
      logo: 'https://www.apple.com/v/macbook-pro/ac/images/overview/hero_13__d1tfa5zby7e6_large.jpg'
    },
    dell: {
      id: 'dell',
      type: 'hardware',
      name: 'Dell Precision 5680',
      description: 'Station de travail mobile puissante',
      specs: {
        processor: 'Intel Core i9 13th Gen',
        memory: '64GB DDR5',
        storage: '2TB SSD',
        display: '16" UHD+',
        battery: 'Jusqu\'à 12 heures'
      },
      price: '2799€',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg'
    },
    hp: {
      id: 'hp',
      type: 'hardware',
      name: 'HP ZBook Fury G9',
      description: 'Performances extrêmes pour les professionnels',
      specs: {
        processor: 'Intel Xeon W-11955M',
        memory: '128GB DDR5',
        storage: '4TB SSD',
        display: '17.3" 4K DreamColor',
        battery: 'Jusqu\'à 10 heures'
      },
      price: '3499€',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/HP_New_Logo_2D.svg'
    }
  },
  license: {
    salesforce: {
      id: 'salesforce',
      type: 'license',
      name: 'Salesforce Sales Cloud',
      description: 'La solution CRM n°1 mondiale',
      features: [
        'Gestion des contacts et comptes',
        'Suivi des opportunités',
        'Tableaux de bord personnalisables',
        'Automatisation des processus de vente'
      ],
      price: '25€/mois',
      logo: 'https://www.salesforce.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg'
    },
    microsoft365: {
      id: 'microsoft365',
      type: 'license',
      name: 'Microsoft 365 Business',
      description: 'Suite complète de productivité',
      features: [
        'Office Apps',
        'Teams',
        'SharePoint',
        'Exchange'
      ],
      price: '12.50€/mois',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    adobe: {
      id: 'adobe',
      type: 'license',
      name: 'Adobe Creative Cloud',
      description: 'Suite créative professionnelle',
      features: [
        'Photoshop',
        'Illustrator',
        'InDesign',
        'Premiere Pro'
      ],
      price: '59.99€/mois',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Adobe_Inc._logo.svg'
    },
    atlassian: {
      id: 'atlassian',
      type: 'license',
      name: 'Atlassian Cloud Premium',
      description: 'Outils de collaboration agile',
      features: [
        'Jira Software',
        'Confluence',
        'Bitbucket',
        'Trello'
      ],
      price: '15.75€/mois',
      logo: 'https://wac-cdn.atlassian.com/dam/jcr:e9ef90f9-c84a-4cba-af2f-9aa7d683ede3/Atlassian-horizontal-blue-rgb.svg'
    },
    autodesk: {
      id: 'autodesk',
      type: 'license',
      name: 'Autodesk AutoCAD',
      description: 'Logiciel de conception professionnelle',
      features: [
        'Dessin 2D/3D',
        'Collaboration cloud',
        'Bibliothèques de blocs',
        'Automatisation'
      ],
      price: '220€/mois',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Autodesk_Logo.svg'
    }
  },
  training: {
    azure: {
      id: 'azure',
      type: 'training',
      name: 'Formation Microsoft Azure',
      description: 'Maîtrisez le cloud computing',
      program: [
        'Introduction au Cloud Computing',
        'Services Azure fondamentaux',
        'Sécurité et conformité',
        'Déploiement et gestion'
      ],
      price: '499€',
      logo: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-azure-marketplace/azure-logo.svg'
    },
    aws: {
      id: 'aws',
      type: 'training',
      name: 'AWS Certified Solutions Architect',
      description: 'Expertise cloud AWS complète',
      program: [
        'Architecture cloud',
        'Services AWS',
        'Sécurité',
        'Optimisation des coûts'
      ],
      price: '699€',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    googlecloud: {
      id: 'googlecloud',
      type: 'training',
      name: 'Google Cloud Platform',
      description: 'Formation cloud GCP',
      program: [
        'Infrastructure GCP',
        'Kubernetes',
        'BigQuery',
        'Cloud Functions'
      ],
      price: '599€',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
    },
    cybersecurity: {
      id: 'cybersecurity',
      type: 'training',
      name: 'Cybersécurité Avancée',
      description: 'Protection des systèmes d\'information',
      program: [
        'Analyse des menaces',
        'Sécurité réseau',
        'Tests d\'intrusion',
        'Réponse aux incidents'
      ],
      price: '899€',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/NIST_logo.svg'
    },
    dataanalysis: {
      id: 'dataanalysis',
      type: 'training',
      name: 'Analyse de Données',
      description: 'Maîtrise des outils d\'analyse',
      program: [
        'Python pour data science',
        'Machine Learning',
        'Visualisation',
        'Big Data'
      ],
      price: '799€',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    }
  },
  expert: {
    cloud: {
      id: 'cloud',
      type: 'expert',
      name: 'Expert Cloud Azure',
      description: 'Architecture et déploiement cloud',
      profile: {
        experience: '10+ ans',
        certifications: ['Azure Solutions Architect Expert', 'AWS Solutions Architect'],
        languages: ['Français', 'Anglais']
      },
      price: '890€/jour',
      logo: 'https://azure.microsoft.com/content/dam/microsoft/final/en-us/microsoft-azure-marketplace/azure-logo.svg'
    },
    security: {
      id: 'security',
      type: 'expert',
      name: 'Expert Cybersécurité',
      description: 'Sécurisation des systèmes',
      profile: {
        experience: '12+ ans',
        certifications: ['CISSP', 'CEH', 'OSCP'],
        languages: ['Français', 'Anglais']
      },
      price: '950€/jour',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/NIST_logo.svg'
    },
    data: {
      id: 'data',
      type: 'expert',
      name: 'Expert Data Science',
      description: 'Analyse et valorisation des données',
      profile: {
        experience: '8+ ans',
        certifications: ['AWS Machine Learning', 'Google Data Engineer'],
        languages: ['Français', 'Anglais']
      },
      price: '920€/jour',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg'
    },
    devops: {
      id: 'devops',
      type: 'expert',
      name: 'Expert DevOps',
      description: 'Automatisation et déploiement continu',
      profile: {
        experience: '9+ ans',
        certifications: ['Kubernetes Admin', 'Azure DevOps Engineer'],
        languages: ['Français', 'Anglais']
      },
      price: '880€/jour',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg'
    },
    ai: {
      id: 'ai',
      type: 'expert',
      name: 'Expert Intelligence Artificielle',
      description: 'Développement de solutions IA',
      profile: {
        experience: '7+ ans',
        certifications: ['TensorFlow Developer', 'PyTorch'],
        languages: ['Français', 'Anglais']
      },
      price: '980€/jour',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg'
    }
  }
};