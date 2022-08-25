import React, { useEffect, useState } from 'react'
import { Badge, Box, Button, Image } from '@chakra-ui/react'

const Cart = ({ state, dispatch }) => {

  const [total, setTotal] = useState(0)
  const { cart } = state
  const changeQuantity = (id, qnty) => {
    dispatch({
      type: 'CHANGE_QUANTITY',
      payload: {
        id,
        qnty
      }
    })
  }

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qnty, 0))
  }, [cart])


  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '20%', backgroundColor: '#efefef', padding: '10px' }}>

      <h2>Shopping Cart</h2>
      <h3>Total: <span>{total}</span></h3>
      {cart.map((item) => (
        <Box display='flex' justifyContent='space-evenly' borderWidth='1px' borderRadius='lg' overflow='hidden' m={1} background='white'>
          <Image
            boxSize='70px'
            objectFit='cover'
            src={item.image}
            alt={item.title}
          />

          <Box p='1' display='flex' flexDirection='column'>
            <Box
              mt='1'
              fontWeight='semibold'
              fontSize={12}
              lineHeight='tight'
              noOfLines={1}
            >
              {item.title}
            </Box>

            <Box fontSize={12} display='flex' justifyContent='space-between'>
              {item.price}$


                <Button onClick={() => changeQuantity(item.id, item.qnty - 1)}>-</Button>
                <span>{item.qnty}</span>
                <Button onClick={() => changeQuantity(item.id, item.qnty + 1)}>+</Button>
              
            </Box>
          </Box>

        </Box>
      ))}
    </div>
  )
}

export default Cart