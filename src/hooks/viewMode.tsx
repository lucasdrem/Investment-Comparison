import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface ViewModeContextData {
  changeViewMode: () => void;
  darkMode: boolean;
  fontColor: string;
  backgroundColor: string;
  divisionGridColor: string;
}

const viewModeContext = createContext<ViewModeContextData>(
  {} as ViewModeContextData,
);

const ViewModeProvider: React.FC = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const fontColor = useRef('#ffffff');
  const backgroundColor = useRef('#1B2431');
  const divisionGridColor = useRef('#ffffff');

  useEffect(() => {
    if (darkMode) {
      fontColor.current = '#ffffff';
      backgroundColor.current = '#1B2431';
      divisionGridColor.current = '#ffffff';
    } else {
      fontColor.current = '#1B2431';
      backgroundColor.current = '#D5E5FC';
      divisionGridColor.current = '#1B2431';
    }
  }, [darkMode]);

  const changeViewMode = useCallback(() => {
    setDarkMode(value => {
      return !value;
    });
  }, [darkMode]);

  return (
    <viewModeContext.Provider
      value={{
        changeViewMode,
        darkMode,
        fontColor: fontColor.current,
        backgroundColor: backgroundColor.current,
        divisionGridColor: divisionGridColor.current,
      }}
    >
      {children}
    </viewModeContext.Provider>
  );
};

function useViewMode(): ViewModeContextData {
  const context = useContext(viewModeContext);

  if (!context) {
    throw new Error('useViewMode must be used within a ViewModeProvider');
  }

  return context;
}

export { ViewModeProvider, useViewMode };
