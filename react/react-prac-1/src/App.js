import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Header from './pages/Header';

function App() {
    const [movieList, setMovieList] = useState([]);
    const movies = async () => {
        const res = await axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9');
        setMovieList(res.data.data.movies);
    };
    useEffect(() => {
        movies();
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Main movies={movieList} />} />
            </Routes>
        </div>
    );
}

export default App;
