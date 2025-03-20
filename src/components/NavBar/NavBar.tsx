import { AppBar, Toolbar, styled } from "@mui/material"




const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                              
                   

                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar