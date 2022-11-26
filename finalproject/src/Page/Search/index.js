import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from '@mui/material/Skeleton';

import { FilmCard, ActorCard } from '../../Component';

import './index.css';

export const Search = () => {
    const [searchParams] = useSearchParams();
    const f = searchParams.get('q'); // keyword
    const [people, setPeople] = useState();
    const [shows, setShows] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            const urlActor = `https://api.tvmaze.com/search/people?q=${f}`;
            const urlShows = `https://api.tvmaze.com/search/shows?q=${f}`;
            // get data
            const requestPeople = axios.get(urlActor);
            const requestShows = axios.get(urlShows);
            axios.all([requestPeople, requestShows])
                .then(axios.spread((...responses)=>{
                    setPeople(responses[0].data);
                    setShows(responses[1].data);
                    setLoading(false);
                }))
                .catch(
                    err=>console.warn(err)
                );
        },500);
    },[f]);
    return (
        <div>
            {
                loading?(
                    <div>
                        <h1>Result for {f}</h1>
                        <div className='SkeletonOutline'>
                            <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                            <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                            <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                            <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                            <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />
                        </div>
                    </div>

                ):(
                    <div>
                        <h1>Result for {f}</h1>
                        <h2>Film</h2>
                        <div className = 'FilmResult'>
                        {
                            shows.length===0?(
                                <b>Sorry, there is no film found for {f} </b>
                            ):(
                                shows.map((show)=><FilmCard key = {show.show.id} dataAPI={show.show}/>)
                            )
                        }
                        </div>
                        <h2>People</h2>
                        <div className = 'PeopleResult'>
                        {
                            people.length===0?(
                                <b>Sorry, there is no person found for {f} </b>
                            ):(
                                people.map((person)=><ActorCard key = {person.person.id} dataAPI={person.person}/>)
                            )
                        }
                        </div>
                    </div>
                )
            }
        </div>
    );
};