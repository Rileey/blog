import {  Box } from '@chakra-ui/react'  


function BlogVideo() {
return (
    <Box>
        <video 
          src="https://res.cloudinary.com/rileey/video/upload/v1646869910/views/2022-03-09T23-50-49.473ZPressure%20%28Music%20Video%29.MP4.mp4"
          className='video' 
          type='video/mp4'
          // autoplay="true"
          controls
          muted
          h='100%'
          maxWidth="100%"
          >
            
        </video>
      </Box> 
);
  }
  
  export default BlogVideo;
  