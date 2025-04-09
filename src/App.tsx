import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import Beers from "./pages/Beers";
import DetailPage from "./pages/DetailPage";
import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    Component: RootLayout,
    children: [
      { path: "/beers", Component: Beers },
      { path: "/beers/:beerID", Component: DetailPage },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;

  return (
    <>
      <HomePage />
      <Beers />
    </>
  );
}

export default App;
