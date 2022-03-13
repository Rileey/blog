import { extendTheme, ChakraProvider, Text, Box, Badge, Grid, GridItem, Image } from '@chakra-ui/react' 
import NavBar from '../components/navBar/NavBar.js';
// import TwitterIcon from '@mui/icons-material/Twitter';
import facebook from '../images/facebook.svg'
import twitter from '../images/twitter.svg'
import linkedin from '../images/linkedin.svg'
import whatsapp from '../images/whatsapp.svg'
import userlogo from '../images/userlogo.svg'
import calendarlogo from '../images/calendarlogo.svg'
import clock from '../images/clock.svg'
import Comment from '../components/comment/comment.js'
import Form from '../components/form/form.js'
import TopStories from '../components/topStories/TopStories.js'



function SinglePost() {

    return (
      < >
        <NavBar />
        <Box p='0px 90px'>
            <Text textStyle='posttitle' p ='20px 0px'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae iaculis nisi.
            </Text>
            <Box display='flex'>
                <Text mr='10px' textStyle='form' display='flex' alignItems='center'>
                Share This Post:
                </Text>
                <Grid templateColumns='repeat(4, 1fr)' gap={2} alignItems='center'>
                    <img width={30} src={facebook} alt="" />
                    <img width={30} src={twitter} alt="" />
                    <img width={30} src={whatsapp} alt="" />
                    <img width={30} src={linkedin} alt="" />
                </Grid>
            </Box>
            <Box m='20px 0'>
                <Image height='500px' objectFit='cover' src="https://images.unsplash.com/photo-1533282960533-51328aa49826?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2742&q=80" alt="post"  />
                <Text textStyle='subcaption'>
                    Financial Writer
                </Text>
                <Box display='flex' alignItems='center' mt="10px">
                    <Box display='flex' alignItems='center'> 
                        <Box>
                        <img src={userlogo} width={15} alt="" />
                        </Box>
                        <Text textStyle='subcaption' ml='5px' fontWeight='bold'>
                            Solomon James
                        </Text>
                    </Box>
                    <Box display='flex' alignItems='center'> 
                    <Box ml='10px'>
                    <img src={calendarlogo} width={15} alt="" />
                    </Box>
                        <Text textStyle='subcaption' ml='5px' fontWeight='bold'>
                            1 March 2022
                        </Text>
                    </Box>
                    <Box display='flex' alignItems='center'> 
                    <Box ml='10px'>
                    <img src={clock} width={15} alt="" />
                    </Box>
                        <Text textStyle='subcaption' ml='5px' fontWeight='bold'>
                            6 Minutes Read
                        </Text>
                    </Box>
                </Box>
            </Box>
            <Box m='30px 0' width='80%'>
                <Text textStyle='title' fontWeight='100'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae iaculis nisi. 
                Praesent varius diam nisi, sit amet mollis dolor pharetra sit amet. 
                Suspendisse porttitor viverra nunc nec ultrices. Nam venenatis quis massa at tempus. 
                Suspendisse pretium metus magna, et interdum dolor gravida luctus. 
                Fusce maximus nisi eros, eu malesuada ipsum ultrices vel. Nam in mi finibus, venenatis nisi tempor, feugiat massa. 

                Quisque elementum, mi vel sodales luctus, est nunc egestas tortor, eget accumsan sapien lorem vitae erat. 
                Curabitur a ex iaculis, posuere lorem at, varius urna. Nam iaculis viverra eros porta fringilla. 
                Nulla vulputate, orci eu convallis rutrum, metus felis euismod quam, quis faucibus mauris dolor eget quam. 
                Proin facilisis erat nunc, quis placerat erat tempor ut. Vestibulum fermentum a ligula id faucibus.

                Pellentesque maximus ipsum nunc, eleifend congue nisl faucibus ut. 
                Nulla ultricies augue ut viverra congue. Maecenas arcu metus, posuere sed orci ut, 
                convallis viverra eros. Proin in neque nisi. Proin eu nunc fringilla, dapibus nisi nec, pretium felis. 
                Sed aliquam dui est, auctor egestas turpis dictum a. Donec placerat eu orci eget cursus. 
                Mauris sodales iaculis mauris et feugiat. In aliquam mi lacinia massa egestas rutrum.
                </Text>

            </Box>
            <Box>
                <Text textStyle='heading' m='10px 5px'>
                    Reader Comments
                </Text>
            </Box>
            <Box borderTop='1px solid black' p='20px 0'>
                <Comment />
                <Comment />
                <Form />
            </Box>
                <Box>
                <Text textStyle='heading' m='10px 5px'>
                    Top Stories
                </Text>
                </Box>
            <Box borderTop='1px solid black' p='20px 0' mb='500px'>
                <Grid  templateColumns='repeat(3, 1fr)' p='0px 30px' gap={10} alignItems='center'>
                    <TopStories />
                    <TopStories />
                    <TopStories />
                </Grid>
            </Box>
        </Box>
      </>
    );
}
  
export default SinglePost;
  