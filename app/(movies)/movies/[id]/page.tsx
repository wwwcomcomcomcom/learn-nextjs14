import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export async function generateMetadata({params:{id}}:{params:{id:string}}){
    //next js에선 fetch된 데이터를 캐싱하기 때문에 fetching 함수 재사용해도 문제가 없음.
    const movie = await getMovie(id);
    return {
        title:movie.title
    }
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