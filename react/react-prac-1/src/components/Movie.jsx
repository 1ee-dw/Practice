function Movie({ movie }) {
    return (
        <div>
            <img src={`${movie.medium_cover_image}`} alt={`${movie.title}`} />
            <ul>
                <li>{movie.title}</li>
                <li>{movie.genres.join(' ')}</li>
            </ul>
        </div>
    );
}
export default Movie;
