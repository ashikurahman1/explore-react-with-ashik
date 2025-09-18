import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import BeginnerSection from './components/BeginnerSection.jsx';
import IntermediateSection from './components/IntermediateSection.jsx';
import AdvanceSection from './components/AdvanceSection.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/beginner',
        element: <BeginnerSection />,
      },
      {
        path: '/intermediate',
        element: <IntermediateSection />,
      },
      {
        path: '/advance',
        element: <AdvanceSection />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
