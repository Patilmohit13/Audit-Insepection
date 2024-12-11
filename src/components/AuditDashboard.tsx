import React from 'react';
import { Calendar, BarChart, ClipboardCheck, AlertTriangle } from 'lucide-react';
import StatCard from './dashboard/StatCard';
import RecentAudits from './dashboard/RecentAudits';

const AuditDashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Audit & Inspection Dashboard</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={<ClipboardCheck className="w-6 h-6 text-green-600" />}
          title="Completed Audits"
          value="24"
          change="+12%"
        />
        <StatCard
          icon={<Calendar className="w-6 h-6 text-blue-600" />}
          title="Scheduled Audits"
          value="8"
          change="-2"
        />
        <StatCard
          icon={<AlertTriangle className="w-6 h-6 text-red-600" />}
          title="Open NCRs"
          value="15"
          change="+3"
        />
        <StatCard
          icon={<BarChart className="w-6 h-6 text-purple-600" />}
          title="Compliance Rate"
          value="92%"
          change="+5%"
        />
      </div>

      <RecentAudits />
    </div>
  );
};

export default AuditDashboard;