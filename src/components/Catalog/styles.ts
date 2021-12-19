import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    title:{
        padding:"2rem 0rem",
        color:'#263238',
        letterSpacing:'0.01px',
        fontSize:'1.3rem !important', 
        fontWeight:'bold !important'
    },
    pagination: {
        "&":{
            marginTop: "4rem",
            marginBottom: "2rem",
        },
        "& > *": {
          justifyContent:"center",
          display:'flex'
        }
    },
    gridItem:{
        maxWidth:"270px",
    }
})