import React, { createContext, useState, useContext } from 'react';

const DisplayContext = createContext();

export const DisplayProvider = ({ children }) => {
  const [display, setDisplay] = useState('default'); // 'default' or 'projectDetails'
  const [project, setProject] = useState(null);

  const showProjectDetails = (project) => {
    setProject(project);
    setDisplay('projectDetails');
  };

  const showDefault = () => {
    setProject(null);
    setDisplay('default');
  };

  return (
    <DisplayContext.Provider value={{ display, project, showProjectDetails, showDefault }}>
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplay = () => useContext(DisplayContext);