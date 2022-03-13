import { Stack, Input, Text, Box, Button, Grid, } from '@chakra-ui/react' 


function Form(){
    return(
    <>
    <Box display='flex' flexDirection='column' w='900px' p='30px 40px'>
        <Text>
          Join the discussion
        </Text>
        <Stack spacing={3} mt={5}>
          <Input textStyle='form' placeholder='Write your comment' size='md' />
          <Box>
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              <Box>
                <Text textStyle='form' m='10px 5px'>Your Name</Text>
                <Input textStyle='form' placeholder='Name' borderRadius='30px' size='sm' p='20px' />
              </Box>
              <Box>
                <Text textStyle='form' m='10px 5px'>Email Address</Text>
                <Input textStyle='form' placeholder='Email Address' borderRadius='30px' size='sm' p='20px' />
              </Box>
            </Grid>
          </Box>
          <Box>
            <Button colorScheme='twitter' m='30px 0px 5px 0px' borderRadius="30px" w='200px'>Submit</Button>
          </Box>
        </Stack>

      </Box>

    </>
    )
}

export default Form