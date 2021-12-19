import { makeStyles } from '@mui/styles';
export  const useStyles = makeStyles({
    logoContainer:{
      paddingLeft:"1.5rem",
      paddingTop: "0.5rem",
      flexGrow: 1,
    },
    logo: {
      maxWidth: 83,
    },
    grow:{
      flexGrow: 1.
    },
    appBar:{
      background: "linear-gradient(to right, #920D65,#D81C98 )",
      boxShadow: "none !important"
    },
    buttonHover:{
      '&:hover': {
        backgroundColor: '#C71990',
      }
    },
    menuPaper: {
      "& .MuiPaper-root":{ 
        backgroundColor: '#CF1B92',
        color: '#fff',
      },
    },
    menuPaperItem:{
      "&:hover":{
        backgroundColor: '#fff !important',
        color: '#CF1B92',
      }
    },
    menuPaperText:{
      fontSize:'0.8rem !important',
      fontWeight:'bold !important',
    },
    buttonLogin:{
      color: 'white', 
      display: 'flex', 
      fontWeight: 'bold !importante',
    }
  
  
  });