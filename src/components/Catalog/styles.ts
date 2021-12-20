import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    title:{
        margin:"2rem 0rem !important",
        color:'#263238',
        letterSpacing:'0.01px',
        fontSize:'1.3rem !important', 
        fontWeight:'bold !important',
        position:"relative",
        

        "&:before": {
            backgroundColor:"#2665FE",
            content: "''",
            position: "absolute",
            width: "80px",
            height: "2px",
            bottom: 0,
            left: 0,
          }
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
        maxWidth:"280px",
    }
})