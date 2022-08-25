import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import Product from './components/Product'
import Cart from './components/Cart'
import reducer from './reducers/reducer'

const App = () => {

  const [state, dispatch] = useReducer(reducer, {
    products: [],
    cart: []
  })

  const fetchProduct = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    dispatch({
      type: "ADD_PRODUCTS",
      payload: data
    })
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%'
    }}>
      <Product state={state} dispatch={dispatch}/>
      <Cart state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
