import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material';

import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

const theme = createTheme({
  palette: {
    primary: { main: '#FF0000' },
    secondary: { main: '#FF0000' },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Usuários</Typography>
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/usuarios" element={<UserList />} />
          <Route path="/dados/:id" element={<UserDetail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
