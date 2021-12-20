import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    cookiesBar:{
      bottom:"20px", 
      display:"flex", 
      zIndex:1500, 
      position:"fixed", 
      alignItems:"center", 
      justifyContent:"center" 
    },
    containerCookiesBar:{
      flex:1, 
      color:"#656565", 
      display:"flex",
      outline:"none", 
      padding:"1.5rem 2rem", 
      alignItems:"center", 
      backgroundColor:"#fff"
    },
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

    }

})
