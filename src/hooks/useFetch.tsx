import { useCallback, useState } from "react";

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

export const useFetch = () => {
    const [data, setData] = useState<jobsProps[]>([]);
    const [error, setError] = useState<null | String>(null);
    const [loading, setLoading] = useState<null | Boolean>(null);

    const request = useCallback(async (url : string) => {
            let response;
            let json;
            try{
                setError(null);
                setLoading(true);
                response = await fetch(url);
                json = await response.json();
                if(!response.ok) throw new Error("Error!")
            }catch(err){
                json = null;
                setError("Error!");
            }finally{
                setData(json);
                setLoading(false);
                return{ response, json}
            }
        },
        [],
    )

    return {data, loading, error, request};

}