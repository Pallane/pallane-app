import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, GraduationCap } from 'lucide-react';
import { courses, getCoursesByLevel } from '../data/courses';

export default function Elearning() {
  const beginnerCourses = getCoursesByLevel('beginner');
  const intermediateCourses = getCoursesByLevel('intermediate');
  const advancedCourses = getCoursesByLevel('advanced');

  const CourseCard = ({ course }: { course: typeof courses[0] }) => (
    <Link 
      to={`/course/${course.id}`}
      className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Clock className="w-5 h-5 text-primary" />
        </div>
        <span className="ml-3 text-sm text-gray-600">{course.duration}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
      <p className="text-gray-600 text-sm mb-4">{course.subject}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-primary">{course.provider}</span>
        <span className="text-sm text-green-600 bg-green-50 px-2 py-1 rounded-full">
          {course.price}
        </span>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen bg-[#EDEDED]">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Formation en ligne gratuite
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Développez vos compétences en IA avec notre sélection de cours gratuits, du niveau débutant à avancé.
            </p>
          </div>
        </div>
      </div>

      {/* Course Sections */}
      <div className="py-16">
        <div className="max-w-[1600px] mx-auto px-8 sm:px-10 md:px-12">
          {/* Beginner Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Niveau Débutant</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {beginnerCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* Intermediate Section */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Niveau Intermédiaire</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {intermediateCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>

          {/* Advanced Section */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Niveau Avancé</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}