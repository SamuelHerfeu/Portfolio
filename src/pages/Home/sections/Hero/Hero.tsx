
import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";



const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
                                <Box position="absolute" textAlign={"center"}>
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>                            
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>Samuel Herfeu</Typography>
                            <Typography color="secondary" variant="h3" textAlign={"center"}>I'm a Softwear Engineer</Typography>
                            <Grid container display="flex" justify-content="center" spacing={5}>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={6} display="flex" justifyContent="center">
                                    <StyledButton>
                                        <AlternateEmailIcon />                                        
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
};

export default Hero