import { Box, Button, Container, Link, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useStyles } from "./styles";
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
            <Container maxWidth="lg"> 
            <Box className={classes.cookiesBar}>
                <Box className={classes.containerCookiesBar} sx={{flexDirection:{xs:"column", sm:"row"}}}>
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
}
