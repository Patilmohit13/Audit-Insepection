import React from 'react';

const PrioritySelect = () => (
  <div>
    <label className="block text-sm font-medium text-gray-700">
      Priority
    </label>
    <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>
  </div>
);

export default PrioritySelect;