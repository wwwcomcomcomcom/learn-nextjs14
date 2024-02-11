import Link from "next/link";

export const metadata = {
    title: "Home",
};

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies() {
    /** Server will fetch once cuz server caches fetch data
     *  We need to use `revalidation` to refresh the cache(?)
    */
    // await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => <li key={movie.id}><Link href={`movies/${movie.id}`}>{movie.title}</Link></li>)}
        </div>
    );
}
