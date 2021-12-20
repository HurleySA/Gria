import { AppBar, Box, Button, Container, Link, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from "react";

export const useStyles = makeStyles({
    nameCompany:{
        maxWidth:"950px",
        fontWeight:"300 !important",
        wordBreak: "break-word",
        fontSize:"1rem !important" ,
        lineHeight:".8rem",
        margin:"0rem 2rem 1rem 0rem"
    },
    button:{
      minWidth:"122px !important", 
      height:"35px", 
      margin: "0rem 0rem 0rem 8rem !important",

      ['@media (max-width:600px)']:{
        margin: "1rem 0rem 0rem 0rem !important",
      }
    }

})
export default function Cookies() {
    const [cookiesAcepted, setCookiesAcepted] = useState(false);
    
    const handleClick = () =>{
      setCookiesAcepted(true);
      localStorage.setItem("cookies", "true");
    }
    const classes = useStyles();

    useEffect(() => {
      const cookies = localStorage.getItem("cookies");
      cookies === "true" ? setCookiesAcepted(true): setCookiesAcepted(false);
    },[])
    return (
      <Box sx={{width:"100%", /* display:"flex", alignItems:"center", justifyContent:"center" */}} >

            {!cookiesAcepted ? 
            <Container maxWidth="lg" sx={{position:"relative"}}>
            <Box sx={{bottom:"20px", display:"flex", zIndex:1500, position:"fixed", alignItems:"center", justifyContent:"center" }}>
                <Box sx={{flex:1, color:"#656565", display:"flex",flexDirection:{xs:"column", sm:"row"} ,outline:"none", padding:"1.5rem 2rem", alignItems:"center", backgroundColor:"#fff" }}>
                    <Box>
                      <Typography className={classes.nameCompany}>
                        Usamos cookies para melhorar sua experiência ao usar nosso site. Para saber mais sobre os cookies que usamos e os dados que coletamos, confira nossa
                        <Link href="https://www.gria.io/politica"> Política de privacidade</Link>.
                      </Typography>
                    </Box>
                    <Box>
                      <Button variant="contained" color="secondary" size="small" onClick={handleClick} className={classes.button}>Ok, Entendi</Button>
                    </Box>
                </Box>
            </Box>
          </Container>   : <Box></Box>}
           

           
       
      </Box>
    )
       /*  <Box sx={{ flexGrow: 1 }}> 
         <Container maxWidth="lg" >
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between",position:"fixed", bottom:"20px", zIndex:1500}}>
                <Box>
                <Typography variant="body1" component="div" align="center" className={classes.nameCompany} >
                    
                    Usamos cookies par nosso sitais sobre os cookies que usamos e os dados que coletamos, 
                    confira nossa <Link href="https://www.gria.io/politica">Política de privacidade</Link>.  
                     </Typography>    
                </Box>
                
                <Button variant="contained" color="secondary" size="small" style={{minWidth:"95px", height:"35px"}}>Pesquisa</Button>
            </Box>
         
         </Container>

        </Box> */
       
    
}
