import React, { useState } from 'react';
import Month from './Month';

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(1);

  return (
    <div>
      <h1>Month Selector</h1>
      <select value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      {/* Use Month component with selectedMonth as attribute */}
      <Month month={selectedMonth} monthName={`Month ${selectedMonth}`} />
    </div>
  );
};

export default App;