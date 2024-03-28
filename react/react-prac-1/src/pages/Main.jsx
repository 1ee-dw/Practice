import { useSearchParams } from 'react-router-dom';
import Movie from '../components/Movie';

export default function Main({ movies }) {
    const [queryParams, getQueryParams] = useSearchParams();
    const result = queryParams.get('search');
    return (
        <main>
            <h1>Movies</h1>
            {!result
                ? movies.map((movie) => {
                      return <Movie movie={movie} key={movie.id} />;
                  })
                : movies
                      .filter((movie) => movie.title.toLowerCase().includes(result.toLowerCase()))
                      .map((movie) => {
                          return <Movie movie={movie} />;
                      })}
        </main>
    );
}
