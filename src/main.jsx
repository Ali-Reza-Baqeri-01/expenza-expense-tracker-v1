import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/*========== Remix Icon ==========*/
import 'remixicon/fonts/remixicon.css';
import './style.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
