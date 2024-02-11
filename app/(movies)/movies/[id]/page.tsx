import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

async function getMovie(id:string) {
    console.log(`Fetching movies ${Date.now()}`);
    await new Promise((resolve)=>setTimeout(resolve,5000));
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieDetail({params:{id}}:{params:{id:string}}){
    return <div>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>
}