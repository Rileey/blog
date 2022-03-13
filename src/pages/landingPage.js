import { extendTheme, ChakraProvider, Text, Box, Badge, Grid, GridItem, Image } from '@chakra-ui/react'  
import { StarIcon } from '@chakra-ui/icons'
import BlogPost from '../components/blogPost/BlogPost'
import NavBar from '../components/navBar/NavBar.js'
import BlogVideo from '../components/blogVideo/BlogVideo.js'
import { Link } from "react-router-dom";

function LandingPage({theme}) {

    return (
        <>
        <NavBar />
      <Box mb={95}>
      <Box padding='0px 85px' mt={55} display='flex' justifyContent='space-between'>
        <Text textStyle='heading'>Category Name</Text>
        <Box display='flex' justifyContent='center' alignItems='center'>
          More Videos
          <Image m='0 5px' src='./arrowright.svg' />
        </Box>
      </Box>
    <Grid templateColumns='repeat(4, 1fr)' gap={1} m='0 75px'> 
      <Link to='/post'>
      <BlogPost />
      </ Link>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </Grid>
    <Box padding='0px 85px' mt={55} display='flex' justifyContent='space-between'>
        <Text textStyle='heading'>Category Name</Text>
        <Box display='flex' justifyContent='center' alignItems='center'>
          More Videos
          <Image m='0 5px' src='./arrowright.svg' />
        </Box>
    </Box>
 

    <Grid padding='0px 85px' m='10px 0' templateColumns='repeat(2, 1fr)' gap={6}>
      <Box>
        <BlogVideo />
          <Box mt={5} >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Box>
            <Box mt={5} textStyle='caption'>
            Nulla quis egestas ipsum. Quisque in mattis lacus. 
            Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.
          </Box>
      </Box>
      <Box h='100%'>
        <Box padding='0px 10px' gap={6}>
          <Grid padding='0px 10px' templateColumns='repeat(2, 1fr)' gap={6}>
            <GridItem >
              <BlogVideo />
            </GridItem>
            <GridItem>
              <Box >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Box>
              <Box mt={5} textStyle='caption'>
              Nulla quis egestas ipsum. Quisque in mattis lacus. 
              Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.
              </Box>
            </GridItem>


            <GridItem display='flex'>
              <BlogVideo />
            </GridItem>
            <GridItem>
              <Box >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Box>
              <Box mt={5} textStyle='caption'>
              Nulla quis egestas ipsum. Quisque in mattis lacus. 
              Sed fermentum magna vitae ante posuere, sit amet posuere libero egestas.
              </Box>
            </GridItem>
          </Grid>
        </Box>
        
      </Box>

    </Grid>  
    <Box padding='0px 85px' mt={55} display='flex' justifyContent='space-between'>
      <Text textStyle='heading'>Category Name</Text>
      <Box display='flex' justifyContent='center' alignItems='center'>
        More Videos
        <Image m='0 5px' src='./arrowright.svg' />
      </Box>
    </Box>

    <Grid templateColumns='repeat(4, 1fr)' gap={1} m='0 75px'>
      <BlogPost />
      <BlogPost />
      <BlogPost />
      <BlogPost />
    </Grid>
    </Box>
    </>

    );
  }
  
  export default LandingPage;