import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import reducer from './reducers/reducer'
import Cart from './components/Cart'
import Products from './components/Products'

const App = () => {

  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: []
  })

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')

      dispatch({
        type: 'FETCH_PRODUCTS',
        payload: res.data
      })
    }
    fetchProducts()
  }, [])

  return (
    <>
      <div className='app' style={{ display: 'flex', justifyContent: 'center'}}>
        <Products state={state} dispatch={dispatch} />
        <Cart state={state} dispatch={dispatch} />
      </div>
    </>
  )
}

export default App
