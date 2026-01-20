import {
    AppBar, Toolbar, Typography, Button, Container,
    Grid, Card, CardContent, CardActions, Box
} from '@mui/material';

export default function Index() {
    return (
        <>
            {/* NavBar  */}
            {/* <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h5' sx={{ flexGrow: 1 }}>
                        Aptech
                    </Typography>
                    <Button sx={{ color: 'white' }}> Home </Button>
                    <Button sx={{ color: 'white' }}> About </Button>
                    <Button sx={{ color: 'white' }}> Services </Button>
                    <Button sx={{ color: 'white' }}> Contact </Button>
                </Toolbar>
            </AppBar> */}

            {/* Hero Section  */}
            <Box sx={{ color: 'white', backgroundColor: 'gray', p: 20, textAlign: 'center' }}>
                <Typography variant='h4' gutterBottom>
                    Welcome to Aptech Learning
                </Typography>
                <Typography variant='h6' gutterBottom>
                    Learn Software Engineering Today!
                </Typography>
                <Button variant='contained'>
                    Explore More
                </Button>
            </Box>

            {/* Card Section */}
            <Container>
                <Grid container spacing={4}>
                    {[1, 2, 3].map((item) => (
                        <Grid item key={item}>
                            <Card>
                                <CardContent>
                                    <Typography variant='h5'>
                                        This is Card {item}
                                    </Typography>
                                    <Typography variant='h6'>
                                        Lorem ipsum dolor sit amet.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button variant='contained'>
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Footer  */}
            <Box>
                <Container sx={{backgroundColor: 'grey', color: 'white', py: 3}}>
                    <Typography align='center'>
                        Aptech 2026, all right reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )
}