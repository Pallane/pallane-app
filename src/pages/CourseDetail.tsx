import React from 'react';
import { useParams } from 'react-router-dom';
import { Clock, BookOpen, GraduationCap, Award, Globe, ExternalLink } from 'lucide-react';
import { courses } from '../data/courses';

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  // Mapping des IDs de cours vers les images de preview
  const courseImages: Record<string, string> = {
    'brain-10min': 'https://images.unsplash.com/photo-1501366062246-723b4d3e4eb6?q=80&w=2938&auto=format&fit=crop',
    'gen-ai-explained': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2940&auto=format&fit=crop',
    'llm-rag': 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2940&auto=format&fit=crop',
    'ai-datacenter': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2934&auto=format&fit=crop',
    'data-science-workflows': 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=2948&auto=format&fit=crop',
    'cuda-intro': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2940&auto=format&fit=crop',
    'physics-ml': 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop'
  };

  if (!course) {
    return (
      <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Cours non trouvé</h1>
          <p className="text-gray-600">Le cours que vous recherchez n'existe pas.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
          <div className="max-w-3xl">
            <span className="inline-block bg-secondary/20 text-secondary px-3 py-1.5 text-sm font-medium mb-4 rounded-full">
              {course.subject}
            </span>
            <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
            <p className="text-lg text-gray-300 mb-6">{course.description}</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>{course.provider}</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>{course.language}</span>
              </div>
              {course.certificate && (
                <div className="flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  <span>Certificat inclus</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Preview Image */}
              <div className="bg-white rounded-xl p-6">
                <a 
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video rounded-lg overflow-hidden hover:opacity-95 transition-opacity"
                >
                  <img
                    src={courseImages[course.id] || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop'}
                    alt={`Aperçu du cours ${course.title}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-medium">Accéder au cours</span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Course Content */}
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-xl font-bold mb-6">Contenu du cours</h2>
                <div className="space-y-4">
                  {course.syllabus?.map((section, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100">
                        <div className="flex items-center">
                          <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                            <span className="text-primary font-medium">{index + 1}</span>
                          </span>
                          <span className="font-medium">{section}</span>
                        </div>
                        <svg
                          className="w-5 h-5 transition-transform group-open:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="pl-15 pr-4 py-3">
                        <p className="text-gray-600">Contenu de la section {index + 1}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Course Objectives */}
              <div className="bg-white rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Ce que vous apprendrez</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.objectives?.map((objective, index) => (
                    <div key={index} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{objective}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prerequisites */}
              {course.prerequisites && (
                <div className="bg-white rounded-xl p-6">
                  <h2 className="text-xl font-bold mb-4">Prérequis</h2>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prerequisite, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span>{prerequisite}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:sticky lg:top-24 space-y-6 self-start">
              <div className="bg-white rounded-xl p-6">
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Accéder au cours sur {course.provider}
                </a>
              </div>

              {/* Course Info */}
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold mb-4">Informations</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-3" />
                    <span>Durée: {course.duration}</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="w-5 h-5 text-gray-400 mr-3" />
                    <span>Langue: {course.language}</span>
                  </li>
                  {course.certificate && (
                    <li className="flex items-center">
                      <Award className="w-5 h-5 text-gray-400 mr-3" />
                      <span>Certificat inclus</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}