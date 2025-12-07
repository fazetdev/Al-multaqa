'use client';

import { useLanguage } from '../../context/useLanguage';

export default function SchedulePage() {
  const { language } = useLanguage();

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {language === 'en' ? 'Appointment Schedule' : 'جدول المواعيد'}
        </h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          + {language === 'en' ? 'New Appointment' : 'موعد جديد'}
        </button>
      </div>
      
      <div className="bg-white border rounded-xl p-8 text-center">
        <div className="text-gray-400 mb-4">📅</div>
        <h3 className="text-lg font-medium text-gray-600 mb-2">
          {language === 'en' ? 'Schedule Calendar' : 'تقويم الجدول'}
        </h3>
        <p className="text-gray-500">
          {language === 'en' 
            ? 'Visual calendar with appointments will appear here.' 
            : 'سيظهر هنا التقويم المرئي مع المواعيد.'}
        </p>
      </div>
    </div>
  );
}
