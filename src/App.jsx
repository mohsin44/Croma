// React-router-DOM imports
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Mainlayout from "./Main_layout/Mainlayout";
import HomePage from "./components/Home/Home";
import CartPage from "./Pages/CartPage";
import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetails/ProductDetailsPage";
import Error from "./Pages/Error";
// import Dealsoftheday, { productsLoader } from './components/Home/Dealsoftheday'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<HomePage />} />
      <Route path="product/:_id" element={<ProductDetailsPage />} />
      <Route path="cart" element={<CartPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
