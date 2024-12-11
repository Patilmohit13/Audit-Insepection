import React from 'react';

const AuditTypeSelect = () => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Audit Type
    </label>
    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
      <option>Safety Inspection</option>
      <option>Environmental Audit</option>
      <option>Compliance Review</option>
      <option>Risk Assessment</option>
    </select>
  </div>
);

export default AuditTypeSelect;