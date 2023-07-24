import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { Body } from "./Body";
import "../scss/App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { RestaurantContainer } from "./restaurant/RestaurantContainer";
import { About } from "./About";
import { Contact } from "./Contact";
import PageNotFound from "./PageNotFound";
import RestaurantDetails from "./restaurant/RestaurantDetails";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));

reactRoot.render(<RouterProvider router={appRouter} />);
