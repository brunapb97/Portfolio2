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
        <Container sx={{display:"flex"}}>   </Container> 
        <Grid container spacing={2}>
          <Grid item xs={12}  md={4} >
            <StyledImg src={Avatar}/>
        </Grid>

          <Grid item xs={12} md={8} >
            <Typography color="primary" variant="h1"  textAlign="center" >Bruna Padilha Borba</Typography>
            <Typography color="primary"  variant="h2" textAlign="center" >Frontend Developer - UX Designer </Typography>
            </Grid>
          </Grid>
    
      <Grid container>  
        <Grid  xs={12}  md={6} display="flex"  justifyContent="center" item>        
          <button><EmailIcon color="primary" textAlign="center"  ></EmailIcon>Contact me</button> 
        </Grid>

       <Grid xs={12} md={6} display="flex"  justifyContent="center" item>       
          <button> <SimCardDownloadIcon color="primary" textAlign="center" ></SimCardDownloadIcon> Download CV </button> 
        </Grid>
      </Grid>

      
        </StyledHero>
      </>
    );
  };
  
  export default Hero