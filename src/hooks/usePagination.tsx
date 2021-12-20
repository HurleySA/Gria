import { useState } from "react";

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

export const usePagination = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [itensPerPage, setItensPerPage] = useState<number>(10);

    const dataPagination = (data: jobsProps[], currentPage: number, itensPerPage: number ) => {
        const pagesPagination = Math.ceil(data.length / itensPerPage);
        const startIndex = currentPage * itensPerPage;
        const lastIndex = startIndex + itensPerPage;

        return {pagesPagination, startIndex, lastIndex};
    }

    return { currentPage, itensPerPage, dataPagination};

    
}