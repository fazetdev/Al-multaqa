'use client';

import { useLanguage } from '../../context/useLanguage';

export default function CustomersPage() {
  const { language } = useLanguage();

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        {language === 'en' ? 'Customers' : 'العملاء'}
      </h1>
      
      <div className="bg-white border rounded-xl overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <input 
              type="text" 
              placeholder={language === 'en' ? 'Search customers...' : 'بحث عن العملاء...'}
              className="px-4 py-2 border rounded-lg w-64"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              + {language === 'en' ? 'Add Customer' : 'إضافة عميل'}
            </button>
          </div>
        </div>
        
        <div className="p-8 text-center text-gray-500">
          <p>{language === 'en' ? 'Customer list will appear here' : 'قائمة العملاء ستظهر هنا'}</p>
        </div>
      </div>
    </div>
  );
}
