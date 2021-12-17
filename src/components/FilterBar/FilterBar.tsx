import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { ChangeEvent, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles({
    root:{
        marginTop: '8rem',
    },
    
    
});

export default function FilterBar() {
    const classes = useStyles();
    const [skillInput, setSkillInput] = useState<String>('');
    const [regionInput, setRegionInput] = useState<String>('');

    const cleanFilters = () => {
        setSkillInput('');
        setRegionInput('');
    }

    const showFilters = () => {
        alert(`Skill: ${skillInput} | Region: ${regionInput}`)
        cleanFilters();
    }
    return (
        <Box className={classes.root} >
            <Container maxWidth="lg">
                <Box style={{padding:'1rem 1rem .5rem 1rem', boxShadow:'0px 2px 2px rgb(0, 0, 0, 0.1)'}}>
                    <Typography variant="body2" component="div" sx={{ flexGrow: 1, paddingTop: 1, paddingLeft:1, fontWeight: '300' }}>
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
                        <TextField id="skillFilter" label="Cargo, habilidades ou empresa" value={skillInput} onChange={(event: ChangeEvent<HTMLInputElement>) => { setSkillInput(event.target.value)}}
                         variant="standard" color="secondary" size="small" sx={{flexGrow:1, maxWidth:{sm:'100%', md:'400px'}, minWidth:'270px'}}
                         InputProps={{
                            endAdornment: <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={cleanFilters}
                              edge="end"
                            >
                              {skillInput ? <CloseIcon fontSize="small" color="secondary"/>  : <CloseIcon  sx={{display: 'none', cursor: 'none'}}/>}
                            </IconButton>
                          </InputAdornment>}}
                         />

                        <TextField id="regionFilter" label="País, cidade ou estado" value={regionInput} onChange={(event: ChangeEvent<HTMLInputElement>) => { setRegionInput(event.target.value)}} 
                        variant="standard" color="secondary" size="small" sx={{flexGrow:1, maxWidth:{sm:'100%', md:'400px'},  minWidth:'270px'}}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={cleanFilters}
                              edge="end"
                            >
                              {skillInput ? <CloseIcon fontSize="small" color="secondary"/>  : <CloseIcon  sx={{display: 'none', cursor: 'none'}}/>}
                            </IconButton>
                          </InputAdornment>}}/>
                        <Box sx={{
                            display:'flex',
                            flexGrow: 1,
                            minWidth:'270px'
        

                        }}>
                            <Button variant="outlined" color="secondary" size="small" onClick={cleanFilters} style={{minWidth:"150px", height:"35px", marginRight:"2rem"} }>Limpar Filtros</Button>
                            <Button variant="contained" color="secondary" size="small" onClick={showFilters} style={{minWidth:"95px", height:"35px"}}>Pesquisa</Button>
                        </Box>

                    </Box>
                </Box>
            </Container>
            
        </Box>
    )
}
