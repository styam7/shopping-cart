import React from 'react'
import { Badge, Box, Button, Image } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

const Products = ({ state, dispatch }) => {

    const { products, cart } = state
    console.log(products)
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', width: '80%' }}>

            {products.map((item) => (
                <Box minW='260px' maxW='260px' borderWidth='1px' borderRadius='lg' overflow='hidden' m={3}>
                    <Image
                        boxSize='200px'
                        objectFit='cover'
                        m='auto'
                        src={item.image}
                        alt={item.title}
                    />

                    <Box p='3'>
                        <Box display='flex' alignItems='baseline'>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>
                                New
                            </Badge>
                            <Box
                                color='gray.500'
                                fontWeight='semibold'
                                letterSpacing='wide'
                                fontSize='xs'
                                textTransform='uppercase'
                                ml='2'
                            >
                                {item.category}
                            </Box>
                        </Box>

                        <Box
                            mt='1'
                            fontWeight='semibold'
                            as='h4'
                            lineHeight='tight'
                            noOfLines={1}
                        >
                            {item.title}
                        </Box>

                        <Box>
                            {item.price}$
                            <Box as='span' color='gray.600' fontSize='sm'>
                            </Box>
                        </Box>
                        <Box display='flex' mt='2' alignItems='center'>
                            {Array(5)
                                .fill('')
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < item.rating.rate ? 'teal.500' : 'gray.300'}
                                    />
                                ))}
                            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                {item.rating.count} reviews
                            </Box>
                        </Box>
                        <Box display='flex' mt='2' alignItems='center'>
                            {cart.some((c) => c.id === item.id) ?
                                <Button
                                    colorScheme='red'
                                    width='100%'
                                    onClick={() => dispatch({
                                        type: 'REMOVE_TO_CART',
                                        payload: item.id
                                    })}>Remove to Cart</Button>
                                :
                                <Button
                                    colorScheme='blue'
                                    width='100%'
                                    onClick={() => dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: {
                                            title: item.title,
                                            id: item.id,
                                            image: item.image,
                                            qnty: 1,
                                            price: item.price
                                        }
                                    })}>ADD to Cart</Button>
                            }
                        </Box>
                    </Box>
                </Box>
            ))}
        </div>
    )
}

export default Products