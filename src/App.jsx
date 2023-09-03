import React from 'react';
import Tabs from './components/Tabs';

const tabsData = [
  { label: 'Tab 1', content: 'Content for Tab 1', callback: () => console.log('Tab 1 clicked') },
  { label: 'Tab 2', content: 'Content for Tab 2', callback: () => console.log('Tab 2 clicked') },
  { label: 'Tab 3', content: 'Content for Tab 3', callback: () => console.log('Tab 3 clicked') },
];

function App() {
  return (
    <div>
      <h1>Tabs Example</h1>
      <Tabs items={tabsData} />
    </div>
  );
}

export default App;
