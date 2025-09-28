import React, {createContext, useContext, useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

const NetInfoContext = createContext(null);

export const NetInfoContextProvider = ({children}) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <NetInfoContext.Provider value={isConnected}>
      {children}
    </NetInfoContext.Provider>
  );
};

const useNetInfo = () => {
  const context = useContext(NetInfoContext);
  if (context === null) {
    throw new Error('useNetInfo must be used within a NetInfoContextProvider');
  }
  return context;
};

export default useNetInfo;
