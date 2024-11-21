import { Course } from '../types/course';

export const courses: Course[] = [
  // Beginner Level
  {
    id: 'brain-10min',
    title: 'Building A Brain in 10 Minutes',
    duration: '10 minutes',
    provider: 'NVIDIA',
    subject: 'Deep Learning',
    price: 'Gratuit',
    link: 'https://courses.nvidia.com/',
    description: 'Construisez un cerveau artificiel en 10 minutes',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'gen-ai-explained',
    title: 'Generative AI Explained',
    duration: '2 heures',
    provider: 'NVIDIA',
    subject: 'Generative AI/LLM',
    price: 'Gratuit',
    link: 'https://courses.nvidia.com/',
    description: 'Introduction à l\'IA générative',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'llm-rag',
    title: 'Augment your LLM Using RAG',
    duration: '1 heure',
    provider: 'NVIDIA',
    subject: 'Generative AI/LLM',
    price: 'Gratuit',
    link: 'https://courses.nvidia.com/',
    description: 'Améliorer les LLM avec RAG',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-datacenter',
    title: 'Introduction to AI in the Data Center',
    duration: '5 heures',
    provider: 'Coursera',
    subject: 'Data Engineering',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'L\'IA dans les centres de données',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'data-science-workflows',
    title: 'Accelerate Data Science Workflows',
    duration: '1 heure',
    provider: 'NVIDIA',
    subject: 'Data Science',
    price: 'Gratuit',
    link: 'https://courses.nvidia.com/',
    description: 'Optimisation des workflows en data science',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'cuda-intro',
    title: 'An Even Easier Introduction to CUDA',
    duration: '1 heure',
    provider: 'NVIDIA',
    subject: 'Accelerated Computing',
    price: 'Gratuit',
    link: 'https://courses.nvidia.com/',
    description: 'Introduction simplifiée à CUDA',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'networking',
    title: 'Introduction to Networking',
    duration: '1 heure',
    provider: 'Coursera/NVIDIA',
    subject: 'Computer Networking',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Bases des réseaux informatiques',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'physics-ml',
    title: 'Physics-informed Machine Learning with Modulus',
    duration: '4 heures',
    provider: 'NVIDIA',
    subject: 'Deep Learning',
    price: 'Gratuit',
    link: 'https://courses.nvidia.com/',
    description: 'Machine learning basé sur la physique',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-101',
    title: 'AI 101',
    provider: 'MIT OCW',
    subject: 'AI basics',
    price: 'Gratuit',
    link: 'https://ocw.mit.edu/',
    description: 'Introduction aux bases de l\'IA',
    level: 'beginner',
    language: 'Anglais',
    certificate: false
  },
  {
    id: 'comp-thinking',
    title: 'Introduction to Computational Thinking',
    provider: 'edX/MIT',
    subject: 'Computational Thinking',
    price: 'Gratuit',
    link: 'https://www.edx.org/',
    description: 'Pensée computationnelle et science des données',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'elements-ai',
    title: 'Elements of AI',
    provider: 'University of Helsinki',
    subject: 'AI basics',
    price: 'Gratuit',
    link: 'https://www.elementsofai.com/',
    description: 'Concepts fondamentaux de l\'IA',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-everyone',
    title: 'AI for Everyone',
    provider: 'IBM/edX',
    subject: 'AI fundamentals',
    price: 'Gratuit',
    link: 'https://www.edx.org/',
    description: 'L\'IA pour tous',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'intro-gen-ai',
    title: 'Introduction to Generative AI',
    duration: '1 heure',
    provider: 'Google/Coursera',
    subject: 'Generative AI',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Introduction à l\'IA générative',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'intro-llm',
    title: 'Introduction to Large Language Models',
    duration: '1 heure',
    provider: 'Google/Coursera',
    subject: 'LLM',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Introduction aux grands modèles de langage',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'image-gen',
    title: 'Introduction to Image Generation',
    duration: '1 heure',
    provider: 'Google/Coursera',
    subject: 'Image Generation',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Introduction à la génération d\'images',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'google-ai',
    title: 'Google AI Essentials',
    duration: '9 heures',
    provider: 'Coursera',
    subject: 'AI Skills',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Compétences essentielles en IA',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'gen-ai-essentials',
    title: 'Generative AI Essentials',
    provider: 'University of Michigan',
    subject: 'AI Ethics',
    price: 'Gratuit',
    link: 'https://online.umich.edu/',
    description: 'Fondamentaux de l\'IA générative',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-business',
    title: 'Introduction to AI for Business',
    provider: 'Udemy',
    subject: 'Business AI',
    price: 'Gratuit',
    link: 'https://www.udemy.com/',
    description: 'L\'IA pour les entreprises',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-everyday',
    title: 'AI for Everyday Life',
    duration: '10 heures',
    provider: 'Coursera',
    subject: 'Practical AI',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'L\'IA au quotidien',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },

  // Intermediate Level
  {
    id: 'rag-agents',
    title: 'Building RAG Agents with LLMs',
    duration: '8 heures',
    provider: 'NVIDIA',
    subject: 'Generative AI/LLM',
    price: 'Gratuit',
    link: 'https://courses.nvidia.com/',
    description: 'Construction d\'agents RAG avec les LLMs',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-mit',
    title: 'Artificial Intelligence',
    provider: 'MIT OCW',
    subject: 'AI Fundamentals',
    price: 'Gratuit',
    link: 'https://ocw.mit.edu/',
    description: 'Cours complet sur l\'IA',
    level: 'intermediate',
    language: 'Anglais',
    certificate: false
  },
  {
    id: 'algorithms',
    title: 'Introduction to Algorithms',
    provider: 'MIT OCW',
    subject: 'Algorithms',
    price: 'Gratuit',
    link: 'https://ocw.mit.edu/',
    description: 'Algorithmes et structures de données',
    level: 'intermediate',
    language: 'Anglais',
    certificate: false
  },
  {
    id: 'ml-intro',
    title: 'Introduction to Machine Learning',
    provider: 'MIT',
    subject: 'Machine Learning',
    price: 'Gratuit',
    link: 'https://openlearning.mit.edu/',
    description: 'Introduction au machine learning',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ml-python',
    title: 'Machine Learning with Python',
    provider: 'edX/MIT',
    subject: 'Machine Learning',
    price: 'Gratuit',
    link: 'https://www.edx.org/',
    description: 'Machine learning avec Python',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'cs50-ai',
    title: 'CS50 AI with Python',
    provider: 'HarvardX/edX',
    subject: 'AI Programming',
    price: 'Gratuit',
    link: 'https://www.edx.org/',
    description: 'IA avec Python',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-projects',
    title: 'AI Projects',
    provider: 'Great Learning',
    subject: 'Practical AI',
    price: 'Gratuit',
    link: 'https://www.greatlearning.ai/',
    description: 'Projets pratiques en IA',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'fine-tuning',
    title: 'Fine Tuning Large Language Models',
    provider: 'DeepLearning.AI',
    subject: 'LLM',
    price: 'Gratuit',
    link: 'https://www.deeplearning.ai/',
    description: 'Fine-tuning des LLMs',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'gen-ai-llm',
    title: 'Generative AI with LLMs',
    provider: 'Coursera',
    subject: 'Generative AI',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'IA générative avec les LLMs',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },

  // Advanced Level
  {
    id: 'sql-advanced',
    title: 'Advanced Topics in SQL',
    provider: 'Stanford Online',
    subject: 'SQL',
    price: 'Gratuit',
    link: 'https://online.stanford.edu/',
    description: 'SQL avancé',
    level: 'advanced',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'data-mining',
    title: 'Mining Massive Data Sets',
    provider: 'Stanford Online',
    subject: 'Data Mining',
    price: 'Gratuit',
    link: 'https://online.stanford.edu/',
    description: 'Data mining à grande échelle',
    level: 'advanced',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'machine-vision',
    title: 'Machine Vision',
    provider: 'MIT OCW',
    subject: 'Computer Vision',
    price: 'Gratuit',
    link: 'https://ocw.mit.edu/',
    description: 'Vision par ordinateur',
    level: 'advanced',
    language: 'Anglais',
    certificate: false
  },

  // Specialized Courses
  {
    id: 'prompt-engineering',
    title: 'ChatGPT Prompt Engineering',
    provider: 'DeepLearning.AI',
    subject: 'Prompt Engineering',
    price: 'Gratuit',
    link: 'https://www.deeplearning.ai/',
    description: 'Ingénierie des prompts',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'chatgpt-excel',
    title: 'ChatGPT for Excel',
    provider: 'Great Learning',
    subject: 'AI Tools',
    price: 'Gratuit',
    link: 'https://www.greatlearning.ai/',
    description: 'ChatGPT pour Excel',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'chatgpt-hr',
    title: 'ChatGPT for HR',
    provider: 'Great Learning',
    subject: 'HR AI',
    price: 'Gratuit',
    link: 'https://www.greatlearning.ai/',
    description: 'ChatGPT pour les RH',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'chatgpt-marketing',
    title: 'ChatGPT for Digital Marketing',
    provider: 'Great Learning',
    subject: 'Marketing AI',
    price: 'Gratuit',
    link: 'https://www.greatlearning.ai/',
    description: 'ChatGPT pour le marketing digital',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-tools',
    title: 'AI Tools Crash Course',
    provider: 'Udemy',
    subject: 'AI Tools',
    price: 'Gratuit',
    link: 'https://www.udemy.com/',
    description: 'Introduction aux outils d\'IA',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-economics',
    title: 'The Economics of AI',
    duration: '13 heures',
    provider: 'Coursera',
    subject: 'AI Economics',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Économie de l\'IA',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'trustworthy-ai',
    title: 'Trustworthy AI Applications',
    duration: '7 heures',
    provider: 'Coursera',
    subject: 'AI Ethics',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Applications IA de confiance',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'gpt-vision',
    title: 'GPT Vision Applications',
    duration: '8 heures',
    provider: 'Coursera',
    subject: 'Computer Vision',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Applications de vision GPT',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'artificial-creativity',
    title: 'Artificial Creativity',
    duration: '10 heures',
    provider: 'Coursera',
    subject: 'Creative AI',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Créativité artificielle',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-strategy',
    title: 'AI Concepts and Strategy',
    duration: '11 heures',
    provider: 'Coursera',
    subject: 'AI Strategy',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Stratégie en IA',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-insurtech',
    title: 'AI in InsurTech',
    duration: '13 heures',
    provider: 'Coursera',
    subject: 'InsurTech',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'IA dans l\'assurance',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'ai-marketing',
    title: 'AI in Marketing',
    duration: '10 heures',
    provider: 'Coursera',
    subject: 'Marketing AI',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'IA dans le marketing',
    level: 'specialized',
    language: 'Anglais',
    certificate: true
  },

  // Data Science Courses
  {
    id: 'data-analytics',
    title: 'Introduction to Data Analytics',
    duration: '14 heures',
    provider: 'META/Coursera',
    subject: 'Data Analytics',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Introduction à l\'analyse de données',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'marketing-analytics',
    title: 'Marketing Analytics Foundation',
    duration: '11 heures',
    provider: 'META/Coursera',
    subject: 'Marketing Analytics',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Analyse marketing',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'data-marketing',
    title: 'Data Analytics for Marketing',
    duration: '12 heures',
    provider: 'META/Coursera',
    subject: 'Marketing Analytics',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Analyse de données marketing',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'data-decisions',
    title: 'Data-Driven Decisions',
    duration: '21 heures',
    provider: 'Google/Coursera',
    subject: 'Data Analysis',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Décisions basées sur les données',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'data-analysis',
    title: 'Analyze Data',
    duration: '32 heures',
    provider: 'Google/Coursera',
    subject: 'Data Analysis',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Analyse de données',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'data-viz',
    title: 'Data Visualization',
    duration: '25 heures',
    provider: 'Google/Coursera',
    subject: 'Data Visualization',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Visualisation de données',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'excel-analysis',
    title: 'Excel Data Analysis',
    duration: '18 heures',
    provider: 'Microsoft/Coursera',
    subject: 'Data Analysis',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Analyse de données avec Excel',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'power-bi',
    title: 'Power BI Fundamentals',
    duration: '16 heures',
    provider: 'Microsoft/Coursera',
    subject: 'Data Analysis',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'Fondamentaux de Power BI',
    level: 'beginner',
    language: 'Anglais',
    certificate: true
  },
  {
    id: 'etl-power-bi',
    title: 'ETL in Power BI',
    duration: '20 heures',
    provider: 'Microsoft/Coursera',
    subject: 'Data Engineering',
    price: 'Gratuit',
    link: 'https://www.coursera.org/',
    description: 'ETL avec Power BI',
    level: 'intermediate',
    language: 'Anglais',
    certificate: true
  }
];

export const getCoursesByLevel = (level: Course['level']) => {
  return courses.filter(course => course.level === level);
};