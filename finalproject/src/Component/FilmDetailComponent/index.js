import { Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserDefault from '../../Asset/UserDefault.png';
import './index.css';

const CastComponent = ({castAPI}) =>{
    const {person, character} = castAPI;
    const {image} = person;
    let medium = '';
    if(image===null||image.medium===null){
        medium = UserDefault;
    }
    else{
        medium = image.medium;
    }
    return (
        <div className = 'infoCast'>
            <img className = 'CastImage' src = {medium} alt='' />
            <div>
                <a href = {`/actor/${person.id}`} target='blank'><h2 className = 'personText'>{person.name}</h2></a>
                <p className = 'charText'>As {character.name}</p>
            </div>
        </div>
    );
};

export const FilmDetailComponent = ({dataAPI}) => {
    const { name, image, summary, status, genres, type, network, officialSite, rating, id, schedule, runtime } = dataAPI;
    const { medium } = image;
    const { average } = rating;
    const { time, days } = schedule;
    const summaryHTML = document.getElementById('summary');
    if(summaryHTML!==null){
        if(summary!==null){
            summaryHTML.innerHTML = `${summary}`;
        }
        else{
            summaryHTML.innerHTML = 'The summary is still updated. Please wait for more information about this film';
        }
    }
    // Get Crew and cast data
    const [state, setState] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const url = `https://api.tvmaze.com/shows/${id}/cast`;
        setTimeout(()=>{ // for fun
            axios.get(url)
                .then((response)=>{
                    setState(response.data);
                    setLoading(false);
                })
                .catch(
                    error => console.warn(error)
                ); 
        },0);
    },[id]);
    return (
        <div className = 'fullInfo'>
            <div className = 'Title'>
                <h1>{name}</h1>
            </div>
            <div className = 'underTitle'>
                <div className='LeftSide'>
                    <div className = 'infoLeft'>
                        <img className='poster' src = {medium} alt='' />
                        <div className='summary' id='summary'/>
                    </div>
                    <h1>Cast</h1>
                    <div className = 'cast'>
                    {
                        loading ? (
                            <Skeleton className = 'Skeleton' variant='rectangular' width={210} height={295} />

                        ):(
                            state.map((st)=>
                                <CastComponent key = {st.person.id} castAPI={st} />
                            )
                        )
                    }
                    </div>
                </div>
                <div className = 'rightSide'>
                    <div className = 'infoRight'>
                        <div className = 'Info' ><h1>Show Info</h1></div>
                        <div className = 'network'><b>Network: </b> {network===null?'Unknown':network.name}</div>
                        <div className = 'schedule'><b>Schedule: </b> {days.map((day)=>`${day} | `)} at {time} ({runtime} min)</div>
                        <div className = 'status'><b>Status: </b> {status}</div>
                        <div className = 'type'><b>Show Typed: </b> {type}</div>
                        <div className = 'genres'><b>Genres: </b> {genres.map((genre)=>`${genre} | `)}</div>
                        <div className = 'officialSite'>
                            <b>Official site: <a href = {officialSite} target='blank'> LINK</a></b>
                        </div>
                        <div className = 'rating'><b>Rating: </b> {average}/10</div>
                    </div>
                </div>
            </div>
        </div>
    );
};