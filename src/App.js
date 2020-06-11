import React, { lazy, Suspense } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './store/reducers';

let store = createStore(rootReducer, applyMiddleware(thunk));

function App() {

  const Shell = lazy(() => import('./shell/containers/Shell'));
  return (
    <Suspense
      fallback={<div
        style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center" }}>
        Loading....
    </div>}>
      <div className="App">
        <Provider store={store}>
          <Shell />
        </Provider>

      </div>
    </Suspense>
  );
}

export default App;
