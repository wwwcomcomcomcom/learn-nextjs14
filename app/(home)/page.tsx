import Link from "next/link";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
export const metadata = {
    title: "Home",
};

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
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}
