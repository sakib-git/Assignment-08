import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
// import { Component } from 'react';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';
import AppDetails from '../Pages/AppDetails';
import Error from '../Pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/apps',
        Component: Apps,
      },
      {
        path: '/install',
        Component: Installation,
      },
      {
        path: '/appdetails/:id',
        Component: AppDetails,
      },
    ],
  },
]);

export default router;
