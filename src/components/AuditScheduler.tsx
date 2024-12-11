import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, Building2 } from 'lucide-react';
import AuditTypeSelect from './scheduler/AuditTypeSelect';
import PrioritySelect from './scheduler/PrioritySelect';

const AuditScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Schedule Audit</h1>
      
      <div className="bg-white rounded-lg shadow p-6">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AuditTypeSelect />
            <PrioritySelect />

            {/* Facility Selection */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Facility
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building2 className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Select facility"
                />
              </div>
            </div>

            {/* Auditor Selection */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700">
                Auditors
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Users className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Select auditors"
                />
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Schedule Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                value={selectedDate.toISOString().split('T')[0]}
                onChange={(e) => setSelectedDate(new Date(e.target.value))}
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Additional Notes
            </label>
            <textarea
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Add any additional notes or instructions..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule Audit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuditScheduler;