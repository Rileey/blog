import { extendTheme, ChakraProvider, Text, Box, Badge, Grid, GridItem, Image } from '@chakra-ui/react'  
import message from '../../images/message.svg'


function Comment(){
    return(
    <>
      <Box boxShadow='md' m='20px 20px' display='flex' p='20px 30px' flexDirection='column' w='900px' h='138px' borderRadius='30px' justifyContent='space-between'>
        <Text textStyle='caption'>
        Fusce bibendum fringilla nunc vitae condimentum. Vivamus ante velit, 
        fermentum id mattis sed, venenatis eu nulla. Proin lacus dui, faucibus sit amet maximus et,
        </Text>
        <Box display='flex' justifyContent='space-between'>
          <Box>
            <Text>
              Felix
            </Text>
            <Text textStyle='subcaption'>
              An hour ago
            </Text>
          </Box>
          <Box display='flex' alignItems='center'>
            <img src={message} alt="" width={15} />
            <Text textStyle='subcaption' m='0 10px'>
              Reply Comment
            </Text>
          </Box>
        </Box>
      </Box>  
    </>
    )
}

export default Comment