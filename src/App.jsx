import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import StackingDapp from './pages/StackingDapp';
import BlsSubmitter from './pages/BlsSubmitter';
import RootLayout from './components/RootLayout';
import ValidatorsPage from './pages/ValidatorsPage';
import ValidatorProfile from './pages/ValidatorProfile';

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path="/" element={<RootLayout />}>
      <Route index element={<ValidatorsPage />}></Route>
      <Route path="/stackingdapp" element={<StackingDapp />}></Route>
      <Route path="/bls" element={<BlsSubmitter />}></Route>
      <Route path="/vprofile" element={<ValidatorProfile />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
