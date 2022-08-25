import React, { useEffect, useState } from 'react'

const Cart = ({ state, dispatch }) => {

    const { cart } = state

    const [total, setTotal] = useState(0)

    const changeQnty = (id, qnty) => {
        dispatch({
            type: 'CHANGE_QUANTITY',
            payload: {
                id,
                qnty
            }
        })
    }

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price)* curr.qnty, 0))
    }, [cart])
    return (
        <div
            style={{
                width: '20%',
                backgroundColor: '#ececec',
                display: 'flex',
                flexDirection: 'column',
                margin: 10,
                padding: 10
            }}>
            <b style={{ fontSize: 30, alignSelf: 'center' }}> Cart</b>
            <b style={{ alignSelf: 'center' }}> SubTotal: $ {total}</b>
            <div>
                {cart.map((c) => (
                    <div
                        key={c.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: 10,
                            margin: 5,
                            border: '1px solid grey',
                            backgroundColor: 'whitesmoke'
                        }}>
                        <img src={c.image} alt={c.title} style={{ width: 70, objectFit: 'cover' }} />

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <span style={{fontSize: '14px'}}>{c.title}</span>
                            <b>{c.price}$</b>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <button onClick={() => changeQnty(c.id, c.qnty - 1)}>-</button>
                            <span>{c.qnty}</span>
                            <button onClick={() => changeQnty(c.id, c.qnty + 1)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart