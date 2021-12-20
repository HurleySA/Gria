import { Avatar, Box, Grid, Link, Typography } from '@mui/material'
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Detail from '../Detail/Detail';
import { useStyles } from './styles';


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
                            <Box className={classes.containerCompany}>
                                <Avatar alt="Avatar company" src={props.job.srcLogo} sx={{marginRight:'10px'}}/>
                                <Typography variant="body1" component="div" align="center" className={classes.nameCompany} >
                                {props.job.nameCompany}
                                </Typography>
                            </Box>
                            <Box className={classes.containerName}>
                                <Typography variant="body1" component="div" className={classes.nameJob}>
                                    {props.job.nameJob}
                                </Typography>
                            </Box>  
                            <Detail IconDetail={<PersonSearchIcon fontSize="small" className={classes.icons}/>} information={props.job.position}/> 
                            <Detail IconDetail={<AccessAlarmIcon fontSize="small" className={classes.icons}/>} information={props.job.period}/> 
                            <Detail IconDetail={<LocationOnOutlinedIcon fontSize="small" className={classes.icons}/>} information={props.job.location}/> 
                            <Typography variant="body1" component="div" sx={{fontSize:".7rem", margin:"2.5rem  0rem 0rem 0rem"}}>
                                Criada há {getDaysDiff(props.job.date)} dias
                            </Typography>
                        </Link>
                    </Grid>
    )
}
