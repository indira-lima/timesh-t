import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepPurple, pink, lime } from '@mui/material/colors';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from 'pages/Home';

import { SavedDataProvider } from 'contexts/SavedDataContext';

import '../scss/app.scss';

const customTheme = createTheme({
  palette: {
    // mode: 'dark',
    primary: deepPurple,
    secondary: pink,
    info: lime,
  },
});

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <SavedDataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </SavedDataProvider>
    </ThemeProvider>
  );
}
