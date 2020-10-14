import React from 'react';

import { ToastProvider } from './toast';
import { ViewModeProvider } from './viewMode';

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <ViewModeProvider>{children}</ViewModeProvider>
  </ToastProvider>
);

export default AppProvider;
