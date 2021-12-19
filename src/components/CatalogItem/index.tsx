import { Avatar, Box, Grid, Link, Typography } from '@mui/material'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { makeStyles } from "@mui/styles"


interface jobsProps{
    id: number,
    nameCompany: string,
    srcLogo: string,
    nameJob: string,
    position: string,
    period: string,
    location: string,
    date: Date,
}

interface itemProps{
    job: jobsProps,
}

const useStyles = makeStyles({
    gridContainer:{
        padding:"1rem",
        backgroundColor:"#ffffff",
        boxShadow:"0px 2px 2px rgb(0 0 0 / 10%)",
        borderRadius: "10px",
    },
    gridItem: {
        maxWidth:'300px',
        height: "100%",
        padding:"1rem",
        
        '&:hover':{
            cursor:'pointer',
        },
    },
})

export default function CatalogItem(props: itemProps ) {

    const getDaysDiff = (data: Date) =>{
        const daysPostedJob = new Date(data).getTime() / (24*60*60*1000);
        const diasNow = Date.now() / (24*60*60*1000);
        return (Math.ceil(diasNow) - Math.ceil(daysPostedJob));
    }

    const classes = useStyles();
    return ( 
        <Grid className={classes.gridContainer}>
                        <Link href="https://www.gria.io/" underline="none" color="inherit" className={classes.gridItem}>
                            <Box sx={{display:'flex',alignItems:'center'}}>
                                <Avatar alt="Remy Sharp" src={props.job.srcLogo} sx={{marginRight:'10px'}}/>
                                <Typography variant="body1" component="div" align="center" sx={{maxWidth:"180px", height:"60px", fontSize:".8rem", fontWeight:"300", lineHeight:".8rem", display:"inline-block"}} >
                                {props.job.nameCompany}
                                </Typography>
                            </Box>
                            <Box sx={{height:"60px"}}>
                            <Typography variant="body1" component="div" sx={{fontSize:".8rem", fontWeight:'bold', padding:".7rem 0rem 0rem 0rem"}}>
                                {props.job.nameJob}
                            </Typography>
                            </Box>   
                            <Grid container direction="row" alignItems="center" spacing={1}>
                                <Grid item>
                                    <PersonSearchIcon fontSize="small" sx={{color: '#919090'}}/>
                                </Grid>
                                <Grid item sx={{fontSize:".7rem", fontWeight:"300", lineHeight:".8rem"}}>
                                    {props.job.position}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" spacing={1}>
                                <Grid item>
                                    <AccessAlarmIcon fontSize="small" sx={{color: '#919090'}}/>
                                </Grid>
                                <Grid item sx={{fontSize:".7rem", fontWeight:"300", lineHeight:".8rem"}}>
                                    {props.job.period}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" spacing={1}>
                                <Grid item>
                                    <LocationOnOutlinedIcon fontSize="small" sx={{color: '#919090'}}/>
                                </Grid>
                                <Grid item sx={{fontSize:".7rem", fontWeight:"300", lineHeight:".8rem"}}>
                                    {props.job.location}
                                </Grid>
                            </Grid>
                            <Typography variant="body1" component="div" sx={{fontSize:".7rem", margin:"2.5rem  0rem 0rem 0rem"}}>
                                Criada há {getDaysDiff(props.job.date)} dias
                            </Typography>
                        </Link>
                    </Grid>
    )
}
