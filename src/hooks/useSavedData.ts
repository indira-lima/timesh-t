import { useContext } from 'react';
import SavedDataContext from 'contexts/SavedDataContext';

const useSavedData = () => {
  const savedDataContext = useContext(SavedDataContext);

  if (!savedDataContext) {
    throw new Error('useSavedData must be used inside a SavedDataProvider');
  }

  return savedDataContext;
};

export default useSavedData;
