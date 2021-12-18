import { Avatar, Box, Container, Grid, Link, Pagination, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useEffect, useState } from "react";

interface vagasProps{
    id: number;
    nameCompany: string;
    srcLogo: string;
    nameJob: string;
    position: string;
    period: string;
    location: string;
    date: Date;
}

const useStyles = makeStyles({
    totalJobsH2:{
       
        fontWeight:'bold', 
        fontSize:'1.3rem', 
        letterSpacing:'0.01px', 
        color:'#263238'
    },
    gridItem: {
        maxWidth:'300px',
        
        '&:hover':{
            cursor:'pointer',
        },
    },
    teste:{
        padding:"2rem 0rem",
        color:'#263238',
        letterSpacing:'0.01px',
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
      }
    
})
const getDaysDiff = (data: Date) =>{
    const daysPostedJob = new Date(data).getTime() / (24*60*60*1000);
    const diasNow = Date.now() / (24*60*60*1000);
    return (Math.ceil(diasNow) - Math.ceil(daysPostedJob));
}
export default function Catalog() {
    const [vagas, setVagas] = useState<vagasProps[]>([]);
    const [loading, setLoading] = useState<Boolean>(true);
    const [page, setPage] = useState<number>(2);

    useEffect(()=> {
        const url = "http://localhost:8000/vagas";
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setVagas(json)
            setLoading(false);
        })
    },[])

    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Typography variant="body1" component="div" sx={{fontSize:'1.3rem', fontWeight:'bold'}} className={classes.teste}>
                Encontramos {vagas.length} oportunidades cadastradas
            </Typography>
            <Grid container spacing={4}>
                {vagas.map(vaga => (
                    <Grid item lg={3} md={4} sm={6} xs={9} key={vaga.id} sx={{maxWidth:"300px"}}>
                    <Link href="https://www.gria.io/" underline="none" color="inherit" sx={{padding:"1rem",boxShadow:'0px 2px 2px rgb(0 0 0 / 10%)', height:"100%"}} className={classes.gridItem}>
                        <Box sx={{display:'flex',alignItems:'center'}}>
                            <Avatar alt="Remy Sharp" src={vaga.srcLogo} sx={{marginRight:'10px'}}/>
                            <Typography variant="body1" component="div" align="center" sx={{maxWidth:"180px", height:"60px", fontSize:".8rem", fontWeight:"300", lineHeight:".8rem"}} >
                            {vaga.nameCompany}
                            </Typography>
                        </Box>
                        <Box sx={{height:"60px"}}>
                        <Typography variant="body1" component="div" sx={{fontSize:".8rem", fontWeight:'bold', padding:".7rem 0rem 0rem 0rem"}}>
                            {vaga.nameJob}
                        </Typography>
                        </Box>   
                        <Grid container direction="row" alignItems="center" spacing={1}>
                            <Grid item>
                                <PersonSearchIcon fontSize="small" sx={{color: '#919090'}}/>
                            </Grid>
                            <Grid item sx={{fontSize:".7rem", fontWeight:"300", lineHeight:".8rem"}}>
                                {vaga.position}
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" spacing={1}>
                            <Grid item>
                                <AccessAlarmIcon fontSize="small" sx={{color: '#919090'}}/>
                            </Grid>
                            <Grid item sx={{fontSize:".7rem", fontWeight:"300", lineHeight:".8rem"}}>
                                {vaga.period}
                            </Grid>
                        </Grid>
                        <Grid container direction="row" alignItems="center" spacing={1}>
                            <Grid item>
                                <LocationOnOutlinedIcon fontSize="small" sx={{color: '#919090'}}/>
                            </Grid>
                            <Grid item sx={{fontSize:".7rem", fontWeight:"300", lineHeight:".8rem"}}>
                                {vaga.location}
                            </Grid>
                        </Grid>
                        <Typography variant="body1" component="div" sx={{fontSize:".7rem", margin:"2.5rem  0rem 0rem 0rem"}}>
                            Criada há {getDaysDiff(vaga.date)} dias
                        </Typography>
                     </Link>
                 </Grid>
                ))}
                   
                
            </Grid>

            <Pagination count={Math.ceil(vagas.length/3)} color="secondary" className={classes.pagination} onChange={(event, page) => console.log(page)} />
        </Container>
    )
}
