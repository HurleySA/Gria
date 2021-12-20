import { Container, Grid, Pagination, Skeleton, Typography } from "@mui/material"

import { useCallback, useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import CatalogItem from "../CatalogItem";
import { useStyles } from "./styles";

export default function Catalog() {
    const {data, loading, request} = useFetch();

    const [currentPage, setCurrentPage] = useState<number>(0);
    const [itensPerPage, setItensPerPage] = useState<number>(16);

    const pagesPagination = Math.ceil(data.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const lastIndex = startIndex + itensPerPage;
   
    const getCurrentJobs = useCallback((startIndex:number,lastIndex: number) =>  { return data.slice(startIndex, lastIndex)},
    [data],
    )
    const currentJobs = getCurrentJobs(startIndex, lastIndex);

    useEffect(()=> {
        const getData = async () =>{
            await request("http://localhost:8000/jobs");
        }
        getData();
    },[request])
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            { data.length > 0 ? 
            <Typography variant="body1" component="div" className={classes.title}>
                 Encontramos {data.length} oportunidades cadastradas
            </Typography> :
            <Typography variant="body1" component="div" className={classes.title}>
                Não encontramos oportunidades cadastradas
            </Typography> 
            }
            <Grid container spacing={4}>
                {(loading ? Array.from(new Array(8)) : currentJobs).map((job, index) => (
                     <Grid key={index} item lg={3} md={4} sm={6} xs={12} sx={{maxWidth:"280px"}}>
                        {job ?(  
                            <CatalogItem key={job.id} job={job}/>) 
                        :  (<Skeleton variant="rectangular" height={350} />)
                        } 
                     </Grid>
                ))}
            </Grid>
            <Pagination count={pagesPagination} color="secondary" className={classes.pagination} onChange={(event, page) => setCurrentPage(page - 1)} />
        </Container>
    )
}
