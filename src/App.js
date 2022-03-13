// import './components/blogVideos/blogvideos.modules.css'
import { extendTheme, ChakraProvider, Text, Box, Badge, Button, Grid, GridItem, Image } from '@chakra-ui/react'  
import LandingPage from './pages/landingPage.js'
import SinglePost from './pages/singlePost.js'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


const theme = extendTheme({ 
  brand: {
    900: '#00B0F0',
    800: '#FFFFFF',
    700: '#000229',
    600: '#ACACAC'
  }, 
  fonts: {
    heading: 'Merriweather Sans, sans-serif',
    body: 'Merriweather Sans, sans-serif',
  },
  textStyles: {
    heading: {
      fontSize: ['20px', '35px', '50px'],
      fontWeight: '600',
      color: '#00B0F0',
      letterSpacing: '-2%',
    },
    title: {
      // you can also use responsive styles
      fontSize: ['8px', '12px', '15px'],
      fontWeight: '400',
      letterSpacing: '-2%',
    },
    caption: {
      fontSize: ['6px', '9px', '11px'],
      fontWeight: '100',
    },
    form: {
      fontSize: ['8px', '12px' ,'15px'],
      fontWeight: '100'
    },
    subcaption: {
      fontSize: ['5px', '8px', '10px'],
      fontWeight: '100',
      color: '#ACACAC',
    },
    posttitle: {
      fontSize: ['20px', '35px', '50px'],
      fontWeight: '400',
      fontFamily: 'Playfair Display, serif',
      letterSpacing: '-2%'
    },
  },
})


  


function App() {

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter >
        <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/post" element={<SinglePost />} />
        </Routes>  
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
