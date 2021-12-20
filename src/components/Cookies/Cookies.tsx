import { AppBar, Box, Button, Container, Link, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { useState } from "react";

export const useStyles = makeStyles({
    nameCompany:{
        maxWidth:"950px",
        minWidth:"280px",
        minHeight:"60px",
        fontWeight:"300 !important",
        wordBreak: "break-word",
        fontSize:"1rem !important" ,
        lineHeight:".8rem",
        margin:"0rem 2rem 1rem 0rem"
    },
    grow:{
        flexGrow: 1.
      },

})
export default function Cookies() {
    const [cookiesAcepted, setCookiesAcepted] = useState(true);
    const classes = useStyles();
    return (
      <Box sx={{width:"100%", /* display:"flex", alignItems:"center", justifyContent:"center" */}} >
        <Container maxWidth="lg" >
            <Box sx={{maxWidth:"100%", display:"flex", alignItems:"center", padding:"1rem",  flexWrap:"wrap", backgroundColor:"#fff", boxShadow:"0px 2px 2px rgb(0 0 0 / 10%)", borderRadius: "10px", position:"fixed", bottom:"20px"}}>
                <Typography className={classes.nameCompany}>
                Usamos cookies para melhorar sua experiência ao usar nosso site. Para saber mais sobre os cookies que usamos e os dados que coletamos, confira nossa
                <Link href="https://www.gria.io/politica"> Política de privacidade</Link>.
                </Typography>
                <Button variant="contained" color="secondary" size="small" style={{minWidth:"95px", height:"35px", marginLeft:"4rem"}}>Ok, Entendi</Button>
            </Box>
        </Container>  
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
