
import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
{/*import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StyledButton from "../../../../components/StyledButton/StyledButton";*/}



const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "105vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        [theme.breakpoints.up('md')] : { 
            backgroundColor: "Black",
            PaddingTop: "100px"
        },
       
    }))

    const StyledImg = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "50%",
        border: `2px solid ${theme.palette.primary.contrastText}`,
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>                            
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary.contrastText" variant="h2" textAlign={"center"} pb={2}>Samuel Herfeu</Typography>
                            <Typography color="secondary" variant="h3" textAlign={"center"}>I'm a Softwear Engineer</Typography>
                            <Typography color="secondary" variant="h3" textAlign={"center"}>Portfolio</Typography>
                            <Typography color="secondary" variant="h5" textAlign={"center"}>In production</Typography>
                            <Typography color="secondary" variant="h5" textAlign={"center"}>We will have news soon</Typography>
                            {/*<Grid container display="flex" justify-content="center" spacing={5} pt={3}>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("download")}>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <StyledButton onClick={() => console.log("contact")}>
                                        <AlternateEmailIcon />                                        
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>*/}
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
};

export default Hero