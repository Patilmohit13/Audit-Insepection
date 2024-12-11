import React from 'react';

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between mb-4">
      {icon}
      <span className={`text-sm font-medium ${
        change.startsWith('+') ? 'text-green-600' : 'text-red-600'
      }`}>
        {change}
      </span>
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

export default StatCard;