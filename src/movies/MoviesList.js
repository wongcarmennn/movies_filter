import React, { useState, useEffect } from 'react';
import { Movie } from './Movie'; // Assuming Movie is a named export
import { Filter } from '../Filter';

const API_URL = "https://api.themoviedb.org/3/discover/movie?api_key=29253cdaa508441499251b2e8bb0ee82&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
const CONFIG_URL = "https://api.themoviedb.org/3/configuration?api_key=29253cdaa508441499251b2e8bb0ee82"

export function MoviesList() {
    const [filter, setFilter] = useState("");
    const [moviesData, setMoviesData] = useState([]); // Renamed movies to moviesData
    const [config, setConfig] = useState({});

    useEffect(() => {
        getConfig();
        getMovies();
    }, []); // Empty dependency array means this effect runs only once after initial render

    const getMovies = async () => {
        try {
            const res = await fetch(API_URL);
            const movies = await res.json();
            setMoviesData(movies.results);
        } catch (e) {
            console.error(e);
        }
    }
    const getConfig = async () => {
        try {
            const res = await fetch(CONFIG_URL);
            const config = await res.json();
            setConfig(config);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <div>
            <Filter filter={filter} setFilter={setFilter} />
            <ul className='movies-list'>
                {moviesData
                    .filter(movie => movie.title.toLowerCase().includes(filter.toLowerCase()))
                    .map(movie => (
                        <Movie key={movie.id} config = {config} movie={movie} />
                    ))}
            </ul>
        </div>
    );
}
