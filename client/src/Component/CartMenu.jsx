import {Box, Button, Divider, IconButton} from '@mui/material'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import styled from '@emotion/styled'
import {
    decreaseCount,
    descreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen
} from '../state/index.js'
import { useNavigate } from 'react-router-dom'

const FlexBox = styled(Box)`
display: flex;
justify-content:space-between;
align-items:center;
`;

const CartMenu = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart= useSelector((state)=>state.cart.cart )
    const isCartOpen = useSelector((state) => state.cart.isCartOpen)
    
    const totalPrice = cart.reduce((total,item)=> {
        return total + item.count * item.attributes.price
    }, 0)
    return (
        <Box display={isCartOpen ? "block" : 'none'}
        backgroundColor="rgba(0,0,0, 0.4)"
        position="fixed"
        zIndex={10}
        width="100%"
        height="100%"
        left="0"
        top="0"
        overflow="auto">
            <Box 
            position="fixed"
            right="0"
            bottom="0"
            width="max(400px, 30%)"
            height="100%"
            backgroundColor="white">
            <Box padding="30px"
            overflow="auto"
            height="100%"
            >
                <FlexBox mb="15px">
                    <h3>Shopping Bag ({cart.length})</h3>
                    <IconButton onClick={()=> dispatch(setIsCartOpen({}))}>
                        <CloseIcon />
                    </IconButton>
                </FlexBox>
                <Box>
                    {cart.map((item) => (
                        <Box key={`${item.attributes.name}-${item.id}`}>
                            <FlexBox p="15px 0">
                                <Box flex="1 1 40%">
                                    <img alt={item?.name}
                                    width="123px"
                                    height="164px"
                                    src={`http://localhost:1338${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} />

                                </Box>
                                <Box flex="1 1 60%">
                                    {/*Item Name */}
                                    <FlexBox mb="5px">
                                        <h3 fontWeight="bold">
                                            {item.attributes.name}
                                        </h3>
                                        <IconButton onClick={()=> dispatch(removeFromCart({id: item.id}))}>
                                            <CloseIcon />
                                        </IconButton>
                                    </FlexBox>
                                    <h3>{item.attributes.shortDescription}</h3>
                                    <FlexBox m="15px 0">
                                        <Box display="flex"
                                        alignItems="center"
                                        border="1.5px solid black">
                                            <IconButton onClick={()=> dispatch(decreaseCount({id: item.id}))}>
                                                <RemoveIcon />
                                            </IconButton>
                                            <h3>{item.count}</h3>
                                            <IconButton onClick={()=> dispatch(increaseCount({id: item.id}))}>
                                                <AddIcon />
                                            </IconButton>
                                        </Box>
                                        {/* Price */}
                                    <h3 fontWeight="bold">
                                        {item.attributes.price}
                                    </h3>
                                    </FlexBox>
                                </Box>
                            </FlexBox>
                            <Divider />
                        </Box>
                    ))}
                </Box>
                {/* Actions */}
                <Box m="20px 0">
                    <FlexBox m="20px 0">
                        <h3 fontWeight="bold">Subtotal</h3>
                        <h3 fontWeight="bold">${totalPrice}</h3>
                    </FlexBox>
                    <Button sx={{
                        borderRadius:0,
                        minWidth:"100%",
                        padding:"20px 40px",
                        m:"20px 0",
                        color:'#C88524',
                        '&:hover': {
                            backgroundColor: '#C88524', // Change the background color on hover
                            color: '#FFF', // Change the text color on hover
                        }
                    }} onClick={()=> {
                        navigate("/checkout");
                        dispatch(setIsCartOpen({}))
                    }}>
                        Checkout
                    </Button>
                </Box>
            </Box>
            </Box>

        </Box>
    )
}

export default CartMenu
