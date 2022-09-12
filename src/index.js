import {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from "react-router-dom";

// import { ThemeProvider } from 'styled-components';
// import { theme } from './theme';


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <App />
    </BrowserRouter>     
  </StrictMode>
);

