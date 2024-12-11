import React from 'react';

const RecentAudits = () => (
  <div className="bg-white rounded-lg shadow p-6 mb-8">
    <h2 className="text-xl font-semibold mb-4">Recent Audits</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Facility
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">2024-03-15</td>
            <td className="px-6 py-4">Main Factory</td>
            <td className="px-6 py-4">Safety Inspection</td>
            <td className="px-6 py-4">
              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                Completed
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default RecentAudits;