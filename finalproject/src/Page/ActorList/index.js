
import {useEffect, useState } from 'react';
import { Pagination, Stack, Skeleton } from '@mui/material';
import axios from 'axios';

import { ActorCard } from '../../Component/ActorCard';

import './index.css';

// const TakeDataAPI :DataAPIProps[] = [];

// fetch API: https://api.tvmaze.com/shows?page=1
// pagination
const pageSize = 20;

export const ActorList = ()=> {
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    const url = 'https://api.tvmaze.com/people';
    const [pagination, setPagination] = useState({
        count: 0,
        from: 0,
        to: pageSize
    }); 
    const [Page, setPage] = useState(state.slice(0,pageSize));
    useEffect(()=>{
        console.log('render');
        setTimeout(()=>{ // for fun
            axios.get(url)
                .then((response)=>{
                    setState(response.data);
                    setLoading(false);
                    setPage(response.data.slice(pagination.from, pagination.to));
                })
                .catch(
                    error => console.warn(error)
                ); 
        },500);
    },[pagination.from, pagination.to]);
    // skeleton: medium (210x295)
    // find the page of pagination
    const handleChangePagination = (event ,page) => {
        // Continue ...
        if(pagination.from !== (page-1)* pageSize){
            const from = (page-1)* pageSize;
            const to = (page) * pageSize;
            setPagination ({...pagination, from, to});
            setLoading(true);
        }
    };
    return (
        <div className='body'>
            {loading ? (
                <div className = 'MainPage'>
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                    <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                </div>
            ): (
                <div className = 'MainPage'>
                    {Page.map((iter)=><ActorCard key={iter.id} dataAPI={iter} />)}
                </div>
            )}
            <div className = 'Pagination'>
                <Stack spacing={2}>
                    <Pagination id='pagination' color='primary' count={Math.ceil(state.length/pageSize)} showFirstButton showLastButton onChange = {(event,page) => handleChangePagination (event, page)} />
                </Stack>    
            </div>
        </div>
    );
};