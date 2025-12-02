
import React from 'react';
import ThemeLayout from './components/ThemeLayout';
import WorldClockDashboard from './components/WorldClockDashboard';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  return (
    <ThemeLayout>
      <WorldClockDashboard />
      <SeoArticle />
    </ThemeLayout>
  );
};

export default App;
