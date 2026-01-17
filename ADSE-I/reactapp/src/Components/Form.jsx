import {Container, Box, Typography, TextField, Button} from '@mui/material';

export default function ContactForm(){

    const getData = (e) =>{
        e.preventDefault();
        console.log("Form Submitted"); 
    }
    return (
        <>
        <Container maxWidth='sm'>
            <Typography variant='h3' align='center' sx={{my: 3}}>
                Contact Form
            </Typography>
            
            <Box component={'form'} onSubmit={getData} sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
                <TextField label='Name' />
                <TextField label='Email'/>
                <TextField label='Message' multiline rows={3} />
                <Button type='submit' variant='contained'>Submit</Button>
            </Box>
        </Container>
        </>
    )
}

// export default ContactForm