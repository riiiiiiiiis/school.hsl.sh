'use client';

import { useState } from 'react';
import AccordionItem from '../AccordionItem';

export default function ProgramSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Модуль 1. Основы вайб-кодинга: от идеи до сайта за 5 минут",
      content: (
        <div>
          <p className="mb-4">Создаем мощный «вау-эффект», доказывая ценность подхода. Публикуем первый сайт моментально.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Перевернутый класс: предварительное изучение «Что такое HTML и почему сайт — это просто текстовый файл?»</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Формат «Код-реактор»: генерация сайта в прямом эфире</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Рабочая тетрадь вайб-кодера: шаблоны промптов и чек-листы</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Парад сайтов: делимся результатами и вдохновляемся</li>
          </ul>
        </div>
      )
    },
    {
      title: "Модуль 2. Продвинутый промпт-инжиниринг и AI-исследования", 
      content: (
        <div>
          <p className="mb-4">Переходим от магии к ремеслу. Создаем «Цифровой двойник» существующего сайта.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Фреймворк К.О.Р.Т.: Контекст, Ответственность, Роль, Требование</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Декомпозиция проекта: извлечение данных, сбор визуального контекста</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Написание мастер-промпта для создания цифрового двойника</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Анализ и оптимизация результатов генерации</li>
          </ul>
        </div>
      )
    },
    {
      title: "Модуль 3. Архитектура веба и создание первого Telegram-бота",
      content: (
        <div>
          <p className="mb-4">Знакомимся с бэкендом. Создаем эхо-бота — идеальный «Hello, World!» для серверной логики.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Визуальная метафора «кофемашины»: путь данных через интерактивную схему</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Создание токена в BotFather и настройка credentials</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Перевернутое знакомство с n8n: от логики к интерфейсу</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Словарь данных: разбор JSON и путь message.chat.id</li>
          </ul>
        </div>
      )
    },
    {
      title: "Модуль 4. Интеграция AI: Создание умного чат-бота",
      content: (
        <div>
          <p className="mb-4">Кульминация курса. Объединяем все навыки в проекте «Бот с характером».</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Методология отладки О.Ш.И.Б.К.А.: системный подход к решению проблем</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>UX для ботов: обратная связь и индикация «думающего» бота</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Настройка системного промпта и создание уникального характера</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Peer-review сессия «Угадай персону»: геймификация финального проекта</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="program" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-apple-gray text-xl mb-2">Чему ты научишься</p>
        <h2 className="text-center text-5xl font-semibold mb-4">Программа интенсива</h2>
        <p className="text-center text-apple-gray text-lg mb-16">Каждый модуль рассчитан на одну неделю обучения.</p>
        
        <div className="bg-white rounded-2xl p-2">
          <div className="space-y-0">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}