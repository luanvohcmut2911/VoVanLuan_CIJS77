import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { FilmDetailComponent } from '../../Component/FilmDetailComponent'

export const FilmDetail = () => {
    const {f} = useParams();
    const [state, setState] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const url = `https://api.tvmaze.com/shows/${f}`;
        setTimeout(()=>{
            axios.get(url)
                .then((response)=>{
                    setState(response.data);
                    setLoading(false);
                })
                .catch(
                    error => console.warn(error)
                ); 
        },500);
    },[f]);
    return (
        <div>
            {loading ? (
                <div>
                    <Skeleton sx={{ bgcolor: 'grey.900' }} className = 'Skeleton' variant='rectangular' width={400} height={30} /> 
                    <div className = 'SkeletonDetail'>
                        <Skeleton sx={{ bgcolor: 'grey.900' }} className = 'Skeleton' variant='rectangular' width={210} height={295} /> 
                        <Skeleton sx={{ bgcolor: 'grey.900' }} className = 'Skeleton' variant='rectangular' width={400} height={150} /> 
                        <Skeleton sx={{ bgcolor: 'grey.900' }} className = 'Skeleton' variant='rectangular' width={210} height={295} /> 
                    </div>
                </div>
            ):(
                <FilmDetailComponent dataAPI={state} />
            )}
           
        </div>
    );
}