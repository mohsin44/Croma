// React-router-DOM imports
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'


import Mainlayout from './Main_layout/Mainlayout'
import HomePage from './components/Home/Home'
import CartPage from './Pages/CartPage'
import ProductDetailsPage from './Pages/ProductDetailspage'
import ProductsPage from './Pages/ProductsPage'
// import Dealsoftheday, { productsLoader } from './components/Home/Dealsoftheday'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Mainlayout/>}>
      <Route index element={<HomePage/>}>
      {/* <Route path='dealsoftheday' element={<Dealsoftheday/>}></Route> */}
      </Route>
      <Route path='productdetails' element={<ProductDetailsPage/>}/>
      <Route path='cart' element={<CartPage/>}/>
      <Route path='products' element={<ProductsPage/>}/>
    </Route>
  )
)

const App = () => {
  return (
 <RouterProvider router={router}/>
  )
}

export default App