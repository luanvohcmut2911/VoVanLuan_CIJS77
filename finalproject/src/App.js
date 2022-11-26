import './App.css';
import { NavBar, Footer } from './Component';
import { Intro, Main, ActorList, FilmDetail,ActorDetail,Search, Error } from './Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/system';
import { useState, useEffect } from 'react';


const App = () => {
    const [loading, setLoading] = useState(true);
    const [bodyClass, setBodyClass] = useState('loading');
    useEffect (()=>{
        setTimeout(()=>{
            setLoading(false);
        },3000);
        setTimeout(()=>{
            setBodyClass('loaded');
        },2100);
    },[]);
    return (
       <div id = 'body' className={bodyClass}>
            {
                loading ? (
                    <Intro />
                ):
                (
                    <BrowserRouter>
                        <NavBar />
                        <div className = 'App'>
                            <Container>
                                <Routes>
                                    <Route path='' element = {<Main />} />
                                    <Route path='shows' element = {<Main />} />
                                    <Route path='shows/:f' element = {<FilmDetail />}/>
                                    <Route path='actor' element = {<ActorList />} />
                                    <Route path='actor/:f' element = {<ActorDetail />}/> 
                                    <Route path='search' element = {<Search/>} />
                                    <Route path='/*' element = {<Error/>} />
                                </Routes>
                            </Container>
                        </div>
                        <Footer />
                    </BrowserRouter>
                )
            }
      </div>
    );
}

export default App;
