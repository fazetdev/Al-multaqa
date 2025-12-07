'use client';

import { useLanguage } from '../../context/useLanguage';

export default function AnalyticsPage() {
  const { language } = useLanguage();
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {language === 'en' ? 'Analytics Dashboard' : 'لوحة التحليلات'}
      </h1>
      <div className="bg-white border rounded-xl p-8 text-center">
        <p className="text-gray-500">
          {language === 'en' 
            ? 'This section is under development.' 
            : 'هذا القسم قيد التطوير.'}
        </p>
      </div>
    </div>
  );
}
