// import './components/blogVideos/blogvideos.modules.css'
import { Box, Image } from '@chakra-ui/react'  


function TopStories({theme}) {

  return (
    <Box borderRadius='lg' overflow='hidden'>
      <Image src='https://bit.ly/2Z4KKcF' borderRadius='lg' alt='Rear view of modern home with pool' />

      <Box p='6px 0px'>

        <Box
          mt='1'
          fontWeight='semibold'
          textStyle='title'
          w='75%'
        >
          Modern home in city center in the heart of historic Los Angeles
        </Box>

       
      </Box>
    </Box>
  );
}

export default TopStories;
