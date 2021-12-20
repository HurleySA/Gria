import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    gridContainer:{
        padding:"1rem",
        backgroundColor:"#ffffff",
        boxShadow:"0px 2px 2px rgb(0 0 0 / 10%)",
        borderRadius: "10px",
    },
    gridItem: {
        maxWidth:'300px',
        minWidth:"270px",
        height: "100%",
        
        '&:hover':{
            cursor:'pointer',
        },
    },
    containerCompany: {
        display:"flex",
        alignItems:"flex-start",
    },
    nameCompany:{
        maxWidth:"200px",
        fontWeight:"300 !important",
        wordBreak: "break-all",
        fontSize:".7rem !important" ,
        lineHeight:".7rem"
    },
    containerName:{
        height:"60px",
    },
    nameJob:{
        fontWeight:'bold !important',
        padding:".7rem 0rem 0rem 0rem",
        fontSize:".8rem !important"
    },icons:{
        color: '#919090',
    }

})