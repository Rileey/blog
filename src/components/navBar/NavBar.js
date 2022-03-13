import {  Box, Image } from '@chakra-ui/react'  


function NavBar() {
return (
    <Box bg='#232323' h={16} display='flex' alignItems='center' p='0px 90px'>
        <Image src='./nav-logo.svg' h='40px'/>
        <Box m='0 20px' color='#fff'>
        Everyday News
        </Box>
    </Box>
);
  }
  
  export default NavBar;
  