import React, { useState } from 'react';

function Tabs({ items }) {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index, callback) => {
    setActiveTab(index);
    if (callback && typeof callback === 'function') {
      callback();
    }
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        {items.map((item, index) => (
          <div
            key={item.label}
            className={`tab ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index, item.callback)}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {items[activeTab].content}
      </div>
      <style>
        {`
          .tabs-container {
            font-family: Arial, sans-serif;
          }
          .tabs {
            display: flex;
            overflow: hidden;
          }
          .tab {
            padding: 10px 20px;
            cursor: pointer;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
            user-select: none;
            transition: background-color 0.3s ease;
          }
          .tab.active {
            background-color: #fff;
            border-bottom: 2px solid #007bff;
          }
          .tab-content {
            padding: 20px;
            border: 1px solid #ccc;
          }
        `}
      </style>
    </div>
  );
}

export default Tabs;
