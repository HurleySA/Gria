import { Avatar, Box, Container, Grid, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const vagas = [
    {id:1,
     nameCompany: "BRASIL WEALTH MANAGEMENT GESTAO DE PATRIMONIO LTDA",
     srcLogo: "https://avatars.githubusercontent.com/u/29778166?v=4",
     nameJob: "ADVOGADO JUNIOR - Tributário Pessoa Física",
     position: "Júnior",
     period: "Integral",
     location: "Rio De Janeiro, Rio De Janeiro, Brasil",
     date: new Date(2021, 11, 16),
    },
    {id:2,
        nameCompany: "BRASIL WEALTH MANAGEMENT GESTAO DE PATRIMONIO LTDA",
        srcLogo: "https://avatars.githubusercontent.com/u/29778166?v=4",
        nameJob: "ADVOGADO JUNIOR - Tributário Pessoa Física",
        position: "Júnior",
        period: "Integral",
        location: "Rio De Janeiro, Rio De Janeiro, Brasil",
        date: new Date(2021, 11, 11),
       },

    {id:3,
     nameCompany: "BRASIL WEALTH MANAGEMENT GESTAO DE PATRIMONIO LTDA",
     srcLogo: "https://avatars.githubusercontent.com/u/29778166?v=4",
     nameJob: "ADVOGADO JUNIOR - Tributário Pessoa Física",
     position: "Júnior",
     period: "Integral",
     location: "Rio De Janeiro, Rio De Janeiro, Brasil",
     date: new Date(2021, 11, 1),
    },
    {id:4,
        nameCompany: "BRASIL WEALTH MANAGEMENT GESTAO DE PATRIMONIO LTDA",
        srcLogo: "https://avatars.githubusercontent.com/u/29778166?v=4",
        nameJob: "ADVOGADO JUNIOR - Tributário Pessoa Física",
        position: "Júnior",
        period: "Integral",
        location: "Rio De Janeiro, Rio De Janeiro, Brasil",
        date: new Date(2021, 11, 16),
       }
]

const useStyles = makeStyles({
    totalJobsH2:{
       
        fontWeight:'bold', 
        fontSize:'1.3rem', 
        letterSpacing:'0.01px', 
        color:'#263238'
    },
    teste:{
        padding:"2rem 0rem",
        color:'#263238',
        letterSpacing:'0.01px',
    }
})

const diasVagas = vagas[0].date.getTime() / (24*60*60*1000);
const diasNow = Date.now() / (24*60*60*1000);
console.log(Math.ceil(diasNow) - Math.ceil(diasVagas));
export default function Catalog() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <Typography variant="body1" component="div" sx={{fontSize:'1.3rem', fontWeight:'bold'}} className={classes.teste}>
                Encontramos {vagas.length} oportunidades cadastradas
            </Typography>
            <Grid container spacing={4}>
                    <Grid item lg={3} md={4} sm={6} xs={9} sx={{maxWidth:"300px"}}>
                        <Box  sx={{padding:'1rem', boxShadow:'0px 2px 2px rgb(0 0 0 / 10%)'}}>
                            <Box sx={{display:'flex',alignItems:'center'}}>
                                <Avatar alt="Remy Sharp" src={vagas[0].srcLogo} sx={{marginRight:'10px'}}/>
                                <Typography variant="body1" component="div" sx={{maxWidth:"180px", height:"60px", fontSize:".8rem", fontWeight:"300", lineHeight:".8rem"}} >
                                {vagas[0].nameCompany}
                                </Typography>
                            </Box>
                            <Typography variant="body1" component="div" sx={{fontSize:".8rem", fontWeight:'bold', padding:".7rem 0rem 1.5rem 0rem"}}>
                                {vagas[0].nameJob}
                            </Typography>

                            <Grid container direction="row" alignItems="center" spacing={1}>
                                <Grid item>
                                    <PersonSearchIcon fontSize="small" sx={{color: '#919090'}}/>
                                </Grid>
                                <Grid item sx={{fontSize:".7rem", fontWeight:"300", lineHeight:".8rem"}}>
                                    {vagas[0].position}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" spacing={1}>
                                <Grid item>
                                    <AccessAlarmIcon fontSize="small" sx={{color: '#919090'}}/>
                                </Grid>
                                <Grid item sx={{fontSize:".7rem", fontWeight:"300", lineHeight:".8rem"}}>
                                    {vagas[0].period}
                                </Grid>
                            </Grid>
                            <Grid container direction="row" alignItems="center" spacing={1}>
                                <Grid item>
                                    <LocationOnOutlinedIcon fontSize="small" sx={{color: '#919090'}}/>
                                </Grid>
                                <Grid item sx={{fontSize:".7rem", fontWeight:"300", lineHeight:".8rem"}}>
                                    {vagas[0].location}
                                </Grid>
                            </Grid>
                            
                         </Box>
                     </Grid>
                
            </Grid>
        </Container>
    )
}
