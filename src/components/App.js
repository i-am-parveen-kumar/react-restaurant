import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { Body } from "./Body";
import "../scss/App.scss";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { About } from './About'
import { Contact } from './Contact'
import PageNotFound from './PageNotFound'
import RestaurantDetails from './restaurant/RestaurantDetails'
import { Provider } from 'react-redux'
import appStore from '../store/appStore'
import Cart from './Cart'
import Footer from './Footer'

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Provider store={appStore}>
          <Header />
          <Outlet />
        </Provider>
      </div>
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <PageNotFound />
  }
])

const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));

reactRoot.render(<RouterProvider router={appRouter} />);
