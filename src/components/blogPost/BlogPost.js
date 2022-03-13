// import './components/blogPost/blogpost.modules.css'
import {  Box, Image } from '@chakra-ui/react'  


function BlogPost({theme}) {
    return (
      <Box m='10px 10px 30px 10px'>
      <Box maxW='350px' >
      <Image 
      src='https://bit.ly/2Z4KKcF' 
      alt='Rear view of modern home with pool' 
      h={200}
      w={300}
      />

      <Box p='6px 0px'>

        <Box
          mt='1'
          textStyle='title'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          
        </Box>
        <Box
          mt='1'
          textStyle='caption'
        >
          Nulla quis egestas ipsum. Quisque in mattis lacus. 
          Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.
        </Box>

       
      </Box>
    </Box>
    </Box>

    );
  }
  
  export default BlogPost;
  

      