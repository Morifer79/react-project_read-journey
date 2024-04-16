import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from 'styleset/GlobalStyle';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleset/theme';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/react-project_read-journey">
            <App />
            <GlobalStyle />
            <Toaster />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
