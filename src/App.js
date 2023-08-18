import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import MainPage from './pages/main-page';
import { theme } from './styles/Theme';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { AuthProvider } from './pages/AuthContext';
import ResultsPage from './pages/results-page';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' elemment={<Root />}>
        <Route index element={<MainPage />} />
        <Route path='/results/:user_id' element={<ResultsPage />} />
      </Route>
    )
  );

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}

const Root = () => {
  return <></>;
};

export default App;
