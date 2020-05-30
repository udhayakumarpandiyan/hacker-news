import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store';

import './App.css';


function App() {

  const Shell = lazy(() => import('./shell/containers/Shell'));
  return (
    <Suspense
      fallback={<div className="supsense-loading">
        Loading....
    </div>}>
      <div>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Shell />
          </PersistGate>
        </Provider>
      </div>
    </Suspense>
  );
}

export default App;
