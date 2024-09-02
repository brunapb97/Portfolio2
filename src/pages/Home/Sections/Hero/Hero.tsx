import { Container, Grid, Grid2, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/Avatar.jpeg"
import EmailIcon from '@mui/icons-material/Email';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';


const Hero = () => {

    const StyledHero = styled ("div")(()=>({
        backgroundColor: "black",
        height: "100vh",
    }));

    const StyledImg = styled ("img")(()=>({
        width: "100%;",
        borderRadius:"100%",
    }));



    return (
      <>
        <StyledHero> 

          <Container sx={{display:"flex"}}>  
            <Grid container spacing={2}>
              <Grid item xs={12}  md={4} >
                <StyledImg src={Avatar}/>
            </Grid>

            <Grid item xs={12} md={8} >
                <Typography color="primary" variant="h1"  textAlign="center" >Bruna Borba</Typography>
                <Typography color="primary"  variant="h2" textAlign="center" >Frontend Developer - UX Designer </Typography>
              <Grid container>  
              <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"}> 
                <button>
                  <EmailIcon color="primary"></EmailIcon>Contact me
                  </button> 
              </Grid>
                
              <Grid item xs={12} md={6} display={"flex"} justifyContent={"center"} > 
                <button> <SimCardDownloadIcon color="primary" ></SimCardDownloadIcon> Download CV 
                </button> 
              </Grid>  
            </Grid>
            </Grid>
            </Grid>


         </Container> 
        </StyledHero>
      </>
    );
  };
  
  export default Hero