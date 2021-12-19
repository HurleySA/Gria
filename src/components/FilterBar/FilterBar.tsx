import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material";

import { ChangeEvent, useState } from "react";
import InputFilter from "../InputFilter/InputFilter";

import { useStyles } from "./styles";

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
                <Box className={classes.containerFilter}>
                    <Typography variant="body2" component="div" className={classes.searchFilter}>
                            Pesquisar por:
                    </Typography>
                    <Box component="form" className={classes.containerInputs} sx={{'& > :not(style)': {  m: 1, width: '25ch' }}}>
                        <InputFilter skillInput={skillInput} setSkillInput={setSkillInput} cleanFilters={cleanFilters} />
                        <InputFilter skillInput={regionInput} setSkillInput={setRegionInput} cleanFilters={cleanFilters} />
                        <Box className={classes.containerButtons}>
                            <Button variant="outlined" color="secondary" size="small" onClick={cleanFilters} style={{minWidth:"150px", height:"35px", marginRight:"2rem"} }>Limpar Filtros</Button>
                            <Button variant="contained" color="secondary" size="small" onClick={showFilters} style={{minWidth:"95px", height:"35px"}}>Pesquisa</Button>
                        </Box>

                    </Box>
                </Box>
            </Container>
            
        </Box>
    )
}
