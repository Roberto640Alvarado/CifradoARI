import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, Outlet, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import CardHome from '../components/Card/CardHome';
import CardConverter from '../components/Card/CardConvert';
import CardResult from '../components/Card/CardResult';
import DecryptCard from '../components/Card/CardDecryptC';
import CardViewDataC from '../components/Card/CardViewDataC';

const router = createBrowserRouter([
    {
      path: "/",
      element: <CardHome />,
      errorElement: <CardHome />,
    },
    {
      path: "/convertirTXT",
      element: <CardConverter />,
      errorElement: <CardHome />,
    },
    {
      path: "/resultado",
      element: <CardResult />,
      errorElement: <CardHome />,
    },
    {
      path: "/desencriptar",
      element: <DecryptCard />,
      errorElement: <CardHome />,
    },
    {
      path: "/dResultado",
      element: <CardViewDataC />,
      errorElement: <CardHome />,
    },
  ]);

export default function Routes2() {
    return <RouterProvider router={router} />
}