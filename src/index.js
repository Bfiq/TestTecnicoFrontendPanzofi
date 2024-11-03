import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/Publication'
import Publication from './pages/Publication';
import {theme} from "./theme"
import { ThemeProvider } from "@mui/material";
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Publication />
    </ThemeProvider>
  </React.StrictMode>
);