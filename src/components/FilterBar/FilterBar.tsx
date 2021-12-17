import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    root:{
        marginTop: '8rem',
    },
    
    
});

export default function FilterBar() {
    const classes = useStyles();
    return (
        <Box className={classes.root} >
            <Container maxWidth="lg">
                <Box style={{padding:'1rem 1rem .5rem 1rem', boxShadow:'0px 2px 2px rgb(0, 0, 0, 0.1)'}}>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, paddingTop: 1, paddingLeft:1 }}>
                            Pesquisar por:
                        
                        </Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                            display: 'flex',
                            alignItems:"center",
                            flexWrap: 'wrap',
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <TextField id="skillFilter" label="Cargo, habilidades ou empresa" variant="standard" color="secondary" size="small" sx={{flexGrow:1, maxWidth:{sm:'100%', md:'400px'}, minWidth:'270px'}}/>
                        <TextField id="regionFilter" label="País, cidade ou estado" variant="standard" color="secondary" size="small" sx={{flexGrow:1, maxWidth:{sm:'100%', md:'400px'},  minWidth:'270px'}}/>
                        <Box sx={{
                            display:'flex',
                            flexGrow: 1,
                            minWidth:'270px'
        

                        }}>
                            <Button variant="outlined" color="secondary" size="small" style={{minWidth:"150px", height:"35px", marginRight:"2rem"}}>Limpar Filtros</Button>
                            <Button variant="contained" color="secondary" size="small" style={{minWidth:"95px", height:"35px"}}>Pesquisa</Button>
                        </Box>

                    </Box>
                </Box>
            </Container>
            
        </Box>
    )
}
