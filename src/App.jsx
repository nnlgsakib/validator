import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import StackingDapp from './pages/StackingDapp';
import BlsSubmitter from './pages/BlsSubmitter';
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<StackingDapp />}></Route>
      <Route path="/bls" element={<BlsSubmitter />}></Route>
    </Route>
  )
);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
