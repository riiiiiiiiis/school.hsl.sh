import { courses } from '../../data/courses';
import { Book, Clock, Calendar, Check } from 'lucide-react';

export default function ProductCards() {

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-4">Наши программы</h2>
        <p className="text-xl text-apple-gray text-center mb-12 max-w-2xl mx-auto">
        От воркшопа на вечер до полноценного курса, который изменит твою карьеру. Выбирай свой трек.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="bg-apple-light-gray rounded-2xl p-8 h-full flex flex-col">
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${course.color} mb-6 self-start`}>
                <Book className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-semibold mb-2">{course.title}</h3>
              <p className="text-lg text-apple-blue font-medium mb-4">{course.subtitle}</p>
              <p className="text-apple-gray text-lg mb-6 flex-grow">{course.description}</p>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-lg">Что изучите:</h4>
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-apple-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-apple-gray">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="font-semibold text-lg">{course.price}</div>
                </div>
                <div className="flex items-center text-apple-gray text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Старт: {course.date}</span>
                </div>
              </div>
              
              <a
                href={course.href}
                className="block w-full text-center bg-apple-blue text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                Подробнее о курсе
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}