'use client';

import { useState } from 'react';
import AccordionItem from '../AccordionItem';

export default function ProgramSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "Основы и принципы ChatGPT",
      content: (
        <div>
          <p className="mb-4">Как на самом деле работает модель и на что обращать внимание при ее использовании.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Принципы работы языковых моделей</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Возможности и ограничения ChatGPT</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Эффективные стратегии использования</li>
          </ul>
        </div>
      )
    },
    {
      title: "Искусство промптинга", 
      content: (
        <div>
          <p className="mb-4">Как грамотно формулировать запросы к ChatGPT для получения качественных и точных ответов.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Структура эффективного промпта</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Техники уточнения и итерации</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Примеры успешных промптов для разных задач</li>
          </ul>
        </div>
      )
    },
    {
      title: "Практическое применение ChatGPT",
      content: (
        <div>
          <p className="mb-4">Решаем повседневные задачи: пишем посты, составляем письма, систематизируем информацию.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Создание контента для соцсетей</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Написание деловых писем и документов</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Анализ и структурирование данных</li>
          </ul>
        </div>
      )
    },
    {
      title: "ChatGPT для рабочих задач",
      content: (
        <div>
          <p className="mb-4">Примеры решения бизнес-задач: строим маркетинговую стратегию, проводим анализ рынка, структурируем данные.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Маркетинговые исследования и стратегии</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Анализ конкурентов и рынка</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Автоматизация рутинных процессов</li>
          </ul>
        </div>
      )
    },
    {
      title: "Продвинутые возможности ChatGPT",
      content: (
        <div>
          <p className="mb-4">Использование кастомных инструкций (Custom Instructions) и создание своих GPTs.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Настройка Custom Instructions</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Создание специализированных GPTs</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Интеграция с другими инструментами</li>
          </ul>
        </div>
      )
    },
    {
      title: "Обзор дополнительных инструментов",
      content: (
        <div>
          <p className="mb-4">Когда возможностей ChatGPT не хватает: краткий обзор Claude, Perplexity и Midjourney.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Claude для аналитических задач</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Perplexity для поиска информации</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Midjourney для создания изображений</li>
          </ul>
        </div>
      )
    },
    {
      title: "Создание контента с нуля",
      content: (
        <div>
          <p className="mb-4">Пошагово напишем с помощью AI продающий пост для соцсетей.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Анализ целевой аудитории</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Создание структуры и контента</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Оптимизация и финальная доработка</li>
          </ul>
        </div>
      )
    },
    {
      title: "Бонусный модуль",
      content: (
        <div>
          <p className="mb-4">Всем участникам — бесплатный доступ к VPN для комфортной работы с нейросетями без ограничений.</p>
          <ul className="space-y-2 pl-5">
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Настройка VPN для работы с AI</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Обход региональных ограничений</li>
            <li className="flex items-start"><span className="w-2 h-2 bg-apple-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>Безопасность при работе с нейросетями</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="program" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-center text-apple-gray text-xl mb-2">Программа воркшопа</p>
        <h2 className="text-center text-5xl font-semibold mb-16">На воркшопе вы научитесь</h2>
        
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