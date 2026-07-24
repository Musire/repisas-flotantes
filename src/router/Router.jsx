import { createBrowserRouter } from "react-router-dom";

import Home from "../composite/Home/Home";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }  
]);

export default Router


// import Products from "../pages/Products/Products";
// import Product from "../pages/Product/Product";
// import Gallery from "../pages/Gallery/Gallery";
// import Installation from "../pages/Installation/Installation";
// import About from "../pages/About/About";
// import FAQ from "../pages/FAQ/FAQ";
// import Contact from "../pages/Contact/Contact";
// import NotFound from "../pages/NotFound/NotFound";

// export const Router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/productos",
//     element: <Products />,
//   },
//   {
//     path: "/productos/:slug",
//     element: <Product />,
//   },
//   {
//     path: "/galeria",
//     element: <Gallery />,
//   },
//   {
//     path: "/instalacion",
//     element: <Installation />,
//   },
//   {
//     path: "/nosotros",
//     element: <About />,
//   },
//   {
//     path: "/preguntas",
//     element: <FAQ />,
//   },
//   {
//     path: "/contacto",
//     element: <Contact />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);