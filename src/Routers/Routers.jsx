import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layout/MainLayout';
// import { Component } from 'react';
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import Installation from '../Pages/Installation';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
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
    ],
  },
]);

export default router;
