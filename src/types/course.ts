export interface Course {
  id: string;
  title: string;
  duration: string;
  provider: string;
  subject: string;
  link: string;
  price: string;
  description?: string;
  videoUrl?: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'specialized';
  objectives?: string[];
  prerequisites?: string[];
  syllabus?: string[];
  instructor?: string;
  language?: string;
  certificate?: boolean;
}