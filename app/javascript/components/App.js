import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Greeting from './Greeting';

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<Greeting />} />),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
