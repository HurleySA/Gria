import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root:{
        marginTop: '8rem',
    },
    containerFilter:{
        padding: "1rem 1rem .5rem 1rem",
        boxShadow:"0px 2px 2px rgb(0 0 0 / 10%)",
        borderRadius:"10px"
    },
    searchFilter:{
        flexGrow:1,
        paddingTop:".5rem",
        paddingLeft:".5rem",
        fontWeight:"300",
    },
    containerInputs:{
        display:"flex",
        alignItems:"center",
        flexWrap:"wrap",
        fontWeight:"300",
        
    },
    containerButtons:{
        display:"flex",
        justifyContent:"space-between",
        flexGrow:0,
        minWidth:'270px',
    }
});