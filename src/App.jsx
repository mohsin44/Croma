// React-router-DOM imports
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'


import Mainlayout from './Main_layout/Mainlayout'
import HomePage from './components/Main_components/Hero/HomePage/HomePage'
import ProductDetails from './components/Main_components/Hero/ProductDetailsPage/ProductDetails'
import CartPage from './components/Main_components/Hero/CartPage/CartPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Mainlayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='productdetails' element={<ProductDetails/>}/>
      <Route path='cart' element={<CartPage/>}/>
    </Route>
  )
)

const App = () => {
  return (
 <RouterProvider router={router}/>
  )
}

export default App