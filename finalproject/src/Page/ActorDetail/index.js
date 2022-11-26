import { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { ActorDetailComponent } from '../../Component/ActorDetailComponent';

import './index.css';

export const ActorDetail = () => {
    const {f} = useParams();
    // console.log(typeof name);
    const [state, setState] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const url = `https://api.tvmaze.com/people/${f}`;
        setTimeout(()=>{ // for fun
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
        <div>{/* uncompleted */}
            {loading?(
                <div>
                    <Skeleton sx={{ bgcolor: 'grey.900' }} className = 'Skeleton' variant='rectangular' width={400} height={30} /> 
                    <div className = 'SkeletonDetail'>
                        <Skeleton sx={{ bgcolor: 'grey.900' }} className = 'Skeleton' variant='rectangular' width={210} height={295} /> 
                        <Skeleton sx={{ bgcolor: 'grey.900' }} className = 'Skeleton' variant='rectangular' width={300} height={150} /> 
                    </div>
                </div>
            ):(
                <ActorDetailComponent dataAPI={state} />
            )}
           
        </div>
    );
};