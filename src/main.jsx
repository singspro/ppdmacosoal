import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, redirect, Route, RouterProvider  } from "react-router-dom"
import HomeRoot from "./pages/homeRoot"
import FailedPage from './Components/failedPage.jsx';
import SoalHeader from './Components/headerSoal.jsx';
import DataUmum from './Components/formInputGeneral.jsx';
import DataInternal from './Components/formInputInternal.jsx';
import Auth from './auth/auth.jsx';
import LoadingPage2 from './Components/loadingPage2.jsx';
import NotFound from './pages/notFound.jsx';
import LoginBiodata from './api/LoginBiodata.jsx';
import Soal from './pages/soal.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/:sings' loader={({params})=>{return(params.sings)}} element={<LoadingPage2/>}/>
    <Route path='/error' element={<HomeRoot/>}>
      <Route path="" element={<FailedPage/>}/>
    </Route>
    <Route path='/q' element={<SoalHeader title={'Post Test'}/>}>
      <Route index loader={LoginBiodata}></Route>
      <Route path='idu' loader={Auth} element={<DataUmum/>}></Route>
      <Route path='idi' loader={Auth} element={<DataInternal/>}></Route>
    </Route>
    <Route path='/asem' element={<HomeRoot/>}>
      <Route path='' loader={Auth} element={<Soal/>}></Route>
    </Route>
    <Route path='/f' element={<HomeRoot/>}>
      <Route index loader={LoginBiodata}></Route>
      <Route path='confirm'></Route>
      <Route path='value'></Route>
      <Route path='review'></Route>
    </Route>
    <Route path='*' element={<NotFound/>}></Route>
    </>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
      <RouterProvider router={router} />
    // </React.StrictMode>
  )























// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import {
//   RouterProvider,
// } from "react-router-dom";
// import App from './app';

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <HomeRoot/>,
//       children:[
//         {
//           path:'loading',
//           element:<HomeRoot/>
//         }
//       ]
//     },
//     {
//       path: "/c",
//       element: <BasicExample/>
//     },
//     {
//       path: "/soal",
//       element: <Soal/>
//     },
//     {
//       path:'/inputData',
//       element:<InputData/>
//     }
//   ]
// );

