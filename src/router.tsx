import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { educationLoader } from './loaders/educationLoader';
import { Search } from './components/Search';
import { EnrichedOccupations } from './components/EnrichedOccupations';
import { AboutEducationView } from './components/AboutEducationView';
import { OccupationsList } from './components/OccupationsList';
import { ErrorComponent } from './components/ErrorComponent';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
        loader: educationLoader,
      },
      {
        path: '/skillchart',
        element: <EnrichedOccupations />,
      },
      {
        path: '/abouteducation',
        element: <AboutEducationView />,
      },
      {
        path: '/occupations',
        element: <OccupationsList />,
      },
    ],
  },
]);
