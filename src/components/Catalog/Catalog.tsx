import { Avatar, Box, Container, Grid, Link, Pagination, Skeleton, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"

import { useCallback, useEffect, useState } from "react";
import CatalogItem from "../CatalogItem";

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
export default function Catalog() {
    const [loading, setLoading] = useState<Boolean>(true);
    
    const [jobs, setJobs] = useState<jobsProps[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [itensPerPage, setItensPerPage] = useState<number>(8);

    const pagesPagination = Math.ceil(jobs.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const lastIndex = startIndex + itensPerPage;
   
    const getCurrentJobs = useCallback((startIndex:number,lastIndex: number) =>  { return jobs.slice(startIndex, lastIndex)},
    [jobs],
    )
    const currentJobs = getCurrentJobs(startIndex, lastIndex);

    useEffect(()=> {
        const url = "http://localhost:8000/jobs";
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setJobs(json)
            setLoading(false);
        })
    },[])
    
    console.log(loading);
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            { jobs.length > 0 ? 
            <Typography variant="body1" component="div" sx={{fontSize:'1.3rem', fontWeight:'bold'}} className={classes.teste}>
                 Encontramos {jobs.length} oportunidades cadastradas
            </Typography> :
            <Typography variant="body1" component="div" sx={{fontSize:'1.3rem', fontWeight:'bold'}} className={classes.teste}>
                Não encontramos oportunidades cadastradas
            </Typography> 
            }
            
            <Grid container spacing={4}>
                {(loading ? Array.from(new Array(8)) : currentJobs).map((job, index) => (
                     <Grid key={index} item lg={3} md={4} sm={6} xs={9} sx={{maxWidth:"270px"}}>
                        {job ?(  
                            <CatalogItem key={job.id} job={job}/>) 
                        :  (<Skeleton variant="rectangular" height={200} />)
                        } 
                     </Grid>
                ))}
                   
                
            </Grid>

            <Pagination count={pagesPagination} color="secondary" className={classes.pagination} onChange={(event, page) => setCurrentPage(page - 1)} />
        </Container>
    )
}