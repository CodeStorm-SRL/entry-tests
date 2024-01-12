import "./App.css";
// import { useState } from 'react'

//iniziamo impostando il routing. App.jsx mi servirà solo per il routing
//installo react-router-dom e react-dom
//importo il metodo createBrowserRouter
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//importo la HomePage
import HomePage from "./pages/HomePage/HomePage.jsx";
//importo la pagine di errore
import ErrorRoute from "./pages/ErrorRoute/ErrorRoute.jsx";
//creo la costante route con i path ai componenti
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorRoute></ErrorRoute>,
  },
]);

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* la nostra App.jsx ci restituisce solo quindi il routing */}
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
