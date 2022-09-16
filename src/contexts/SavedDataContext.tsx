import React, { createContext, useEffect, useState } from 'react';

export interface SavedData {
  clients: string[];
  projects: string[];
  tags: string[];
}

const SavedDataContext = createContext<SavedData>({} as SavedData);

interface SavedDataProviderProps {
  children: React.ReactNode;
}

export const SavedDataProvider: React.FC<SavedDataProviderProps> = ({
  children,
}) => {
  const [clients, setClients] = useState(['Nagumo']);
  const [projects, setProjects] = useState(['NAAP']);
  const [tags, setTags] = useState(['Codificação']);

  useEffect(() => {
    // calling IPC exposed from preload script
    window.electron.ipcRenderer.on('get-saved-data', (rawData) => {
      const data = JSON.parse(String(rawData));

      setClients(data.clients || []);
      setProjects(data.projects || []);
      setTags(data.tags || []);
    });

    window.electron.ipcRenderer.sendMessage('get-saved-data', []);
  }, []);

  return (
    <SavedDataContext.Provider
      value={{
        clients,
        projects,
        tags,
      }}
    >
      {children}
    </SavedDataContext.Provider>
  );
};

export default SavedDataContext;
