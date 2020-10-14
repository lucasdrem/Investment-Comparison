import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { useViewMode } from './hooks/viewMode';

import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  const { backgroundColor, fontColor } = useViewMode();
  return (
    <Router>
      <Routes />

      <GlobalStyle backgroundColor={backgroundColor} fontColor={fontColor} />
    </Router>
  );
};

export default App;
