import React from 'react'

const Product = ({ state, dispatch }) => {
    const { products, cart } = state

    return (
        <div style={{
            width: '80%',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            display: 'flex'
        }}>
            {
                products.length > 0 ?
                    <>
                        {products.map((prod) => (
                            <div
                                key={prod.id}
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    padding: '10px',
                                    width: '22%',
                                    marginTop: 10,
                                    gap: 10,
                                    border: '1px solid grey'

                                }}>
                                <img src={prod.image} alt={prod.title} style={{ height: '250px', objectFit: 'cover' }} />

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>{prod.title}</span>
                                    <b>{prod.price}$</b>
                                </div>
                                {cart.some((c) => c.id === prod.id) ?
                                    <button
                                        style={{ backgroundColor: 'red', cursor: 'pointer' }}
                                        onClick={() =>dispatch({
                                            type: 'REMOVE_FROM_CART',
                                            payload: prod.id
                                        })}
                                    >
                                        Remove from Cart
                                    </button>
                                    :
                                    <button
                                        style={{ backgroundColor: '#449f47', cursor: 'pointer' }}
                                        onClick={() =>dispatch({
                                            type: 'ADD_TO_CART',
                                            payload: {
                                                id: prod.id,
                                                title: prod.title,
                                                image: prod.image,
                                                qnty: 1,
                                                price: prod.price
                                            }
                                        })}
                                    >
                                        ADD to Cart</button>
                                }
                            </div>
                        ))}
                    </>
                    :
                    <>NO Product Found</>
            }
        </div>
    )
}

export default Product