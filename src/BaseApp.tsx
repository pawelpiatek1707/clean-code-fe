import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { GlobalStyle } from './theme';

export const BaseApp = () => {
  return (
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  );
};
