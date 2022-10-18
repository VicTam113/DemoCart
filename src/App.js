import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Checkout from './Checkout';
import Introduce from './Introduce';
import ProductDetail from './ProductDetail';
import ProductList from './ProductList';
import {CartContext} from './CartContext'
import { useState } from 'react';

function App() {

	const [cartItems, setCartItems] = useState([])

  return (
    <BrowserRouter>

		<CartContext.Provider value={{cartItems,setCartItems}}>

			<nav>
				<Link to="/">首頁</Link> 
				<Link to="/checkout">購物車結帳</Link>                         
				<Link to="/Introduce">關於實作介紹</Link>
			</nav>

			<Routes>
				<Route path="/" element={<ProductList/>} />
				<Route path="/checkout" element={<Checkout/>} />
				<Route path="/Introduce" element={<Introduce/>} />
				<Route path="/product" element={<ProductDetail/>}>
					<Route path=":id" element={<ProductDetail/>} />
				</Route>

				<Route path="*" element= {<p>找不到網頁</p>} />
			</Routes>

		</CartContext.Provider>

	</BrowserRouter>
  );
}

export default App;