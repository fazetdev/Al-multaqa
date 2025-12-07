'use client';

import { TrendingUp, Users, Calendar, Star } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export default function Home() {
  const { language } = useLanguage();

  const stats = [
    { title: language === 'en' ? 'Revenue' : 'الإيرادات', value: '3,250 AED', icon: TrendingUp, color: 'blue' },
    { title: language === 'en' ? 'Customers' : 'العملاء', value: '24', icon: Users, color: 'green' },
    { title: language === 'en' ? 'Appointments' : 'المواعيد', value: '47', icon: Calendar, color: 'purple' },
    { title: language === 'en' ? 'Rating' : 'التقييم', value: '4.8', icon: Star, color: 'orange' },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold">
          {language === 'en' ? 'Welcome to ALMULTAQLA' : 'مرحباً بك في المتلقى'}
        </h1>
        <p className="mt-2 opacity-90">
          {language === 'en' 
            ? 'Manage your salon in one dashboard' 
            : 'إدارة صالونك في لوحة تحكم واحدة'}
        </p>
      </div>

      {/* Stats Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className={`bg-white border rounded-xl p-4 ${stat.color === 'blue' ? 'border-blue-200' : 
            stat.color === 'green' ? 'border-green-200' : 
            stat.color === 'purple' ? 'border-purple-200' : 'border-orange-200'}`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded-lg">
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-4">
            {language === 'en' ? 'Today\'s Appointments' : 'مواعيد اليوم'}
          </h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-3 bg-blue-50 rounded-lg">
                <div className="flex justify-between">
                  <span>Customer {i} - Service</span>
                  <span className="text-sm text-gray-500">10:00 AM</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border rounded-xl p-6">
          <h3 className="font-semibold text-lg mb-4">
            {language === 'en' ? 'Quick Actions' : 'إجراءات سريعة'}
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <button className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">
              + {language === 'en' ? 'Add Appointment' : 'إضافة موعد'}
            </button>
            <button className="p-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100">
              + {language === 'en' ? 'Add Customer' : 'إضافة عميل'}
            </button>
            <button className="p-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100">
              {language === 'en' ? 'View Reports' : 'عرض التقارير'}
            </button>
            <button className="p-3 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100">
              {language === 'en' ? 'Settings' : 'الإعدادات'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
