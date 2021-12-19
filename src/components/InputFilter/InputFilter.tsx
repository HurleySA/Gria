import { IconButton, InputAdornment, TextField } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';

import { ChangeEvent } from "react";
import { useStyles } from "./styles";

interface inputProps{
    skillInput: String,
    setSkillInput: React.Dispatch<React.SetStateAction<String>>,
    cleanFilters: () => void,

}
export default function InputFilter(props: inputProps) {
    const classes = useStyles();
    return (
        <TextField id="skillFilter" label="Cargo, habilidades ou empresa" value={props.skillInput} onChange={(event: ChangeEvent<HTMLInputElement>) => { props.setSkillInput(event.target.value)}}
                         variant="standard" color="secondary" size="small" sx={{maxWidth:{sm:'100%', md:'400px'}}} className={classes.input} 
                         InputProps={{
                            endAdornment: <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={props.cleanFilters}
                              edge="end"
                            >
                              {props.skillInput ? <CloseIcon fontSize="small" color="secondary"/>  : <CloseIcon  sx={{display: 'none', cursor: 'none'}}/>}
                            </IconButton>
                          </InputAdornment>}}
                         />
    )
}
