import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import Cart from "./src/components/Cart";
import UserContext from "./src/utils/UserContext";

const RestaurantMenu = lazy(() => import("./src/components/RestaurantMenu"));
const About = lazy(() => import("./src/components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState();
  // console.log(useState());

  useEffect(() => {
    const data = {
      name: "hariharen",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, setUserName: setUserName }}
    >
      <div className="app">
        {/* This will change only the header
         */}
        {/* <UserContext.Provider value={{ loggedInUser: "Akshay Saini" }}>
          <Header />
        </UserContext.Provider>
         */}
        <Header />
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const routeProvider = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
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
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routeProvider} />);
